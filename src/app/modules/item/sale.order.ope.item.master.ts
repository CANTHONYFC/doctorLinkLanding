import { Injectable } from "@angular/core";
import {MatLegacySnackBar as MatSnackBar} from "@angular/material/legacy-snack-bar";
import { HttpParams } from '@angular/common/http';
import { openSnackBar } from "app/shared/util/operations/operations";
import { ItemService} from "../../core/qontrols/services/item.service";
import { clearStorageAndSession} from "../../shared/util/utils/Storage";
import { ModelItemService} from "../../core/qontrols/services/model.item.service";

@Injectable({
	providedIn: 'root',
})
export class SaleOrderOpeItemMaster {
	constructor(
		private _itemService: ItemService,
		private _snackBar: MatSnackBar,
		private _modelItemService:ModelItemService,
	) { }

	get snackBar() {
		return this._snackBar;
	}

	getItem(parameters: HttpParams): Promise<any> {
		return this._itemService.searchSupply(parameters, this._snackBar).
			then(response => {
				if (!response.successful)
					this.validateSession(response);
				else if (response.data.pagination.countFilter > 0)
					return response.data.pagination;
			})
	}


	getModelItem(parameters: HttpParams): Promise<any> {
		return this._modelItemService.search(parameters, this._snackBar).
			then(response => {
				if (!response.successful)
					this.validateSession(response);
				else if (response.data.pagination.countFilter > 0)
					return response.data.pagination.list;
			})
	}


	unSub() {
		this._itemService.unSub();
	}
	validateSession(response) {
		openSnackBar(this._snackBar, response.message);
		if (response.code == 'ERROR_SESSION_EXPIRED') {
			clearStorageAndSession();
			location.reload();
		}
	}
}
