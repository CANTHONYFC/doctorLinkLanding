import { Auditory} from "./auditory.model";
import { PriceListDetail } from "./pricelist.model";

export class Item extends Auditory {
    id?: string;
    code?: string;
    weight?: number;
    isbn?: string;
    name?: string;
    logicStatus?: number;
    color?: string;
    size?: string;
    pricingUnit?: number;
    salesUnit?: string;
    inventoryItem?: number;
    salesItem?: number;
    taxCode?: string;
    projectName?: string;
    barCode?: string;
    afeDet?: string;
    codDet?: string;
    porDet?: number;
    type?: string; // I=IMPUESTO, P=PRODUCTO, S= SERVICIO
    clNMaxVt?: number;
    family?: Family;
    brand?: Brand;
    inventoryUnit?: string;
    salesItemsPerUnit?: number;
    unitGroupEntry?: number;
    priceList?: PriceListDetail[];
    kardex?: Kardex[];
    companyId?: string;
    companyName?: string;
    montMinDetraction?: number;
    /*SUPPLY */
    priceEntities?: PriceListDetail[];
    stockWarehouse?: StockWarehouse[];
    alternativeCatalogs?: AlternativeCatalog[];
    itemCode?: string;
    modelCode?: string;
    isMiscellaneous?: string;
    itemCodePattern?: string;

    maxDiscount?: number;
    /*UI */
    percentageDistribution?: number;
}
export class AlternativeCatalog extends Auditory {
    businessCode?: string;
    itemCode?: string;
    itemCodeSubstitute?: string;
    itemNameSubstitute?: string;
}
export class Family extends Auditory {
    id?: string;
    code: string;
    name: string;
}
export class Brand extends Auditory {
    id?: string;
    code: string;
    name: string;
}
export class Kardex {
    itemEntity?: string;
    kardexUbication?: KardexUbication[];
    logicStatus?: number;
    stock?: number;
    stockCommitted?: number;
    stockDisponible?: number;
    stockNoForSale?: number;
    stockRequested?: number;
    store?: string;
    warehouse?: string
    stockUbicationShowCase?: number; //suma existencias en ubicaciones de tipo vitrina del almacen
    stockUbicationSales?: number; //suma existencias en ubicaciones de tipo Ventas del almacen
    stockList?: { DES?: number, TRA?: number, VEN?: number };
    warehouseName: string;
}
export class KardexUbication extends Auditory {
    id?: string;
    item?: string;
    logicStatus?: number;
    stock?: number;
    stockCommitted?: number;
    stockRequest?: number;
    store?: string;
    ubication?: string;
    ubicationEntry?: number;
    warehouse?: string;
    warehouseName?: string;
    ubicationType?: string;

    unitMSR: string;
    isSale: number;
}
export class StockWarehouse extends Auditory {
    itemCode?: string;
    quantity?: number;
    stock?: number;
    stockLocation?: StockLocation[];
    stockLocationGroup?: { DES?: number, TRA?: number, VEN?: number };
    warehouseCode?: string;
    warehouseName?: string;
}
export class StockLocation {
    itemCode?: number;
    locationCode?: string;
    warehouseCode?: string;
    locationEntry?: string;
    locationType?: string;
    quantity?: number;
}
