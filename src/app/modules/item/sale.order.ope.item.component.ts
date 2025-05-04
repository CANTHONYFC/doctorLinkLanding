import { Component, OnInit, Inject, EventEmitter, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { User } from 'app/core/user/user.model';
import { Subject, debounceTime } from 'rxjs';
import { Item} from "../../core/qontrols/models/item.model";
import { WarehouseStore} from "../../core/qontrols/models/warehouse.model";
import { ITEM_TYPE_LIST_FILTER} from "../discount/ope_v3/discount.ope.constants";
import { getHttpItem, getHttpModelItem} from "../discount/ope/discount.ope.constants";
import { Router } from '@angular/router';
import { ROUTES} from "../../shared/util/constants/route";
import { selectHostView} from "../../shared/util/utils/UtilFunctions";
import { LISTVIEW } from 'environments/enviroment_list_component.conts';
import { SaleOrderOpeItemMaster } from './sale.order.ope.item.master';
import { openSnackBar} from "../../shared/util/operations/operations";
import { isWorkOrder} from "../discount/ope_v3/discount.ope.constants";
import { MatButtonConfigModel} from "../../shared/button.card/button-config";
import { ModelItem} from "../../core/qontrols/models/model.item.model";
import {DiscountOpe3Validators} from "../discount/ope_v3/discount.ope.validators";
import {ItemTableComponent} from "../discount/ope_v3/product-discount/item-table/item-table.component";

@Component({
    selector: 'app-sale-order-ope-item',
    templateUrl: './sale.order.ope.item.component.html',
})
export class SaleOrderOpeItemComponent implements OnInit, OnDestroy {
    @ViewChild("filterChildren") filterChildren: ElementRef;
    itemList: Item[] = [];
    itemChildrenList: Item[] = [];
    typeList: any[] = ITEM_TYPE_LIST_FILTER;
    warehouseStoreList: WarehouseStore[] = [];
    buttons: MatButtonConfigModel[] = [];
    buttonsFooter: MatButtonConfigModel[] = [];
    filterItemForm: FormGroup;
    showLoadSearchItem: boolean = false;
    showLoadSearchItemChildren: boolean = false;
    isNc: boolean
    userSelected: User = new User();
    modelChanged: Subject<any> = new Subject<any>();
    enviarDialogMessage = new EventEmitter();
    itemSelected: Item = new Item();
    itemListSelected: Item[] = [];
    validatView = selectHostView;
    listView = LISTVIEW;
    displayedColumns: string[] = ['code', 'description', 'action'];
    constructor(
        private el: ElementRef,
        private _router: Router,
        private _saleOrderOpeItemMaster: SaleOrderOpeItemMaster,
        private _discountOpe3Validator: DiscountOpe3Validators,
        public _dialogRef: MatDialogRef<ItemTableComponent>,
        @Inject(MAT_DIALOG_DATA)
        private _itemDialog: {
            currency: string;
            businessChannelCode: string;
            businessPartnerCode: string;
            warehouseStoreList: WarehouseStore[],
            priceList: any
        }
    ) {
        this.modelChanged.pipe(debounceTime(400)).subscribe(({ filter: filter }) => { this.search(filter); });
    }
    ngOnInit(): void {
        this.setButtons();
        this.warehouseStoreList = this._itemDialog.warehouseStoreList || [];
        this.filterItemForm = this._discountOpe3Validator.getBuilderFilterItem();
        this.filterItemForm.get('warehouseStore').setValue(this.warehouseStoreList[0]?.warehouse || '');
        this.searchItem(this.f('filter').value.trim(), this.f('warehouseStore').value);
    }
    ngOnDestroy(): void {
        this._saleOrderOpeItemMaster.unSub();
    }
    ngAfterViewInit() {
        setTimeout(() => this.el.nativeElement.querySelectorAll('input')[0]?.focus());
    }
    f(campo: any) {
        return this.filterItemForm.get(campo);
    }
    changed(text: string) {
        this.modelChanged.next({ filter: text });
    }
    eventSubmit() {
        this.enviarDialogMessage.emit(this.filterItemForm);
        this.el.nativeElement.querySelectorAll('input')[0]?.focus();
    }
    search(filter: string = this.f('filter').value.trim()) {
        this.searchItem(filter, this.f('warehouseStore').value);
    }
    searchItem(filter: string = '', warehouses: string = this.warehouseStoreList.map(p => p.warehouse).join(",")): void {
        this.changeLoad(true);
        warehouses = warehouses == '' ? this.warehouseStoreList.map(p => p.warehouse).join(",") : warehouses;
        this._saleOrderOpeItemMaster.getItem(getHttpItem(
            {
                filter: filter.trim(), priceLists: this._itemDialog.priceList || '',
                type: this.f('type').value,
                isMiscellaneous: '',
                size: 10,
                warehouses: warehouses,
                currency: this._itemDialog.currency,
                businessPartnerCode: this._itemDialog.businessPartnerCode,
                businessChannelCode: this._itemDialog.businessChannelCode,
            })).
            then(response => response.countFilter > 0 ? this.toList(response) : this.itemList = []).finally(() => { this.changeLoad(false); });
    }
    searchItemModel(filter: string = ''): void {
        if (!this.itemSelected) return;
        this.itemChildrenList = [];
        this._saleOrderOpeItemMaster.getModelItem(getHttpModelItem(
            {
                modelCode: filter.trim(),
                size: 20,
                itemCode: this.itemSelected.itemCode || '',
            })).then(response => this.itemChildrenList = response ? response : []);
    }
    rowSelected() {
        this.enviarDialogMessage.emit({
            selected: this.itemListSelected
        });
        this._dialogRef.close();
    }
    getStock(element: Item) {
        return element.stockWarehouse.length == 0 ? 0 : (element.stockWarehouse[0].stockLocationGroup.VEN || 0);
    }
    setButtons() {
        this.buttons.push({
            type: 'mat-mini-fab',
            icon: 'feather:filter',
            action: () => this.searchItem(this.f('filter').value.trim()),
            disabled: this.showLoadSearchItem,
            tooltip: 'Buscar',
            shown: true,
        });
        this.buttonsFooter = [
            {
                type: 'mat-flat-button',
                icon: 'heroicons_outline:x',
                action: () => this._dialogRef.close(),
                title: 'CERRAR',
                shown: true,
                color: 'accent'
            },
            {
                type: 'mat-flat-button',
                icon: 'heroicons_outline:check',
                action: () => this.itemListSelected.length > 0 ? this.rowSelected() : null,
                title: 'SELECCIONAR',
                shown: true,
            }
        ]
    }
    changeLoad(value: boolean) {
        this.showLoadSearchItem = value;
        this.buttons.forEach(p => p.disabled = value);
    }
    toList(pagination: any) {
        this.itemList = pagination.list.map((p) => {
            let data: Item = p;
            data.actions = [
                {
                    type: 'mat-icon-button',
                    class: 'mat-focus-indicator mat-icon-button mat-button-base',
                    classIcon: 'icon-size-4 text-blue-800',
                    icon: 'heroicons_outline:chevron-down',
                    action: () => {
                        if (data.actions[0].icon == 'heroicons_outline:chevron-down') {
                            data.actions[0].icon = 'heroicons_outline:chevron-up'; this.itemSelected = p;
                        } else { data.actions[0].icon = 'heroicons_outline:chevron-down'; this.itemSelected = null; }
                        this.searchItemModel();
                    },
                    shown: p.isMiscellaneous == 'Y',
                }
            ];
            return data;
        }
        );
    }
    isWorkOrder() {
        return isWorkOrder(this._router.url);
    }
    findItem(code: string) {
        return this.itemListSelected.find(p => p.itemCode == code);
    }
    findItemAndModel(modelCode: string, itemCode: string) {
        return this.itemListSelected.find(p => p.itemCode == itemCode);
    }
    addItemSelected(item: Item) {
        if (!this.findItem(item.itemCode)) {  this.itemListSelected.push(item); } else this.deleteItemSelected(item);
    }

    addModelItemSelected(item: ModelItem) {
        let itemPattern;
        if (!this.findItemAndModel(item.modelCode, item.itemCode)) {
            itemPattern = this.itemList.find(p => p.itemCode == item.itemCode && p.isMiscellaneous == 'Y');
            this.itemListSelected.push(this.setModelItem(itemPattern, item));
        }
        // console.log(this.itemListSelected);
    }

    deleteItemSelected(item: Item) {
        if (item.itemCodePattern) {
            if (item.modelCode) if (this.itemListSelected.filter(p => p.itemCodePattern == item.itemCodePattern && p.isMiscellaneous == 'N').length == 1)
                this.itemListSelected.splice(this.itemListSelected.findIndex(p => p.itemCode == item.itemCodePattern && p.isMiscellaneous == 'Y'), 1);
        }
        this.itemListSelected.splice(this.itemListSelected.findIndex(p => p.itemCode == item.itemCode && (item.modelCode ? p.modelCode == item.modelCode : true)), 1);
    }

    setModelItem(item: Item, modelItem: ModelItem): Item {
        let it = new Item();
        it.itemCode = item.itemCode;
        it.weight = item.weight;
        it.inventoryUnit = item.inventoryUnit;
        it.name = item.name;
        it.company = item.company;
        it.createDate = item.createDate;
        it.inventoryUnit = item.inventoryUnit;
        it.priceEntities = item.priceEntities;
        it.salesItem = item.salesItem;
        it.status = item.status;
        it.stockWarehouse = item.stockWarehouse;
        it.type = item.type;
        it.isMiscellaneous = 'N';
        it.itemCodePattern = item.itemCode;
        return it;
    }
    itemListSelectedIsMiscellaneous(isMiscellaneous: string) {
        return this.itemListSelected.filter(p => p.isMiscellaneous == isMiscellaneous);
    }
}
