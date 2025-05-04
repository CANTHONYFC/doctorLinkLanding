import { Auditory } from './auditory.model';

export class StockTransfer extends Auditory {
  code?: string;
  codeDependency?: string;
  codeERP?: string;
  comment?: string;
  dateArrival?: string;
  docNum?: number;
  docReference?: string;
  docYear?: number;
  document?: string;
  documentERP?: string;
  erpDocNum?: number;
  erpSerialNumber?: number;
  id?: string;
  migration?: string;
  objectDependency?: string;
  process?: string;
  receivingUser?: string;
  receivingUserEmail?: string;
  receivingUserName?: string;
  requested?: number;
  statusOperation?: string;
  storeFrom?: string;
  storeTo?: string;
  transactionalCode?: string;
  transferDate?: string;
  transferRequest?: string;
  typeTransfer?: string;
  detail?: StockTransferDetail[];
  moreData?: { docReference: string }

  nif?:number;
  businessPartnerCode?:string;
  businessPartnerName?:string;
  warehouseFromName?:string;
  warehouseFrom?:string;
  warehouseTo?:string;
  warehouseToName?:string;
  carrierCompany?:string;
  carrierCompanyName?:string;
  carrierCompanyAddress?:string;
  carrierCompanyRUC?:string;
  driverLicense?:string;
  carrierDoc?:string;
  carrierDocType?:string;
  carrierName?:string;
  vehiclePlate?:string;
  hopperPlate?:string;
  vehicleBrand?:string;
  arrivalAddress?:string;
  arrivalLocation?:string;
  startingAddress?:string;
  startingLocation?:string;
  totalGrossWeight?:number;
  transferModality?:string;
  transferReason?:string;
  cashRegister?:string;
  type?:'NORMAL'|'AUTOSERVICE';
}
export class StockTransferDetail extends Auditory {
  baseQuantity?: number;
  id?: string;
  inventoryItem?: string;
  itemCode?: string;
  itemName?: string;
  numberLine?: number;
  quantity?: number;
  store?: string;
  ubicationEntryFrom?: number;
  ubicationEntryTo?: number;
  ubicationFrom?: string;
  ubicationTo?: string;
  unitGroupEntry?: number;
  unitMSREntry?: number;
  unitMsrCode?: string;
  warehouseFrom?: string;
  warehouseTo?: string;
  sunatOperation?:string;
  /*ui */
  ubicationObjectFrom?:any[];
  ubicationObjectTo?:any[];
}