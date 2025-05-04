import { EntityModel } from "./entity.model";
import { RoleModel } from "./role.model";

export interface MemberModel {
	id?: string;
	entities?: EntityModel[];
	entity?: EntityModel;
	memberType?: MemberTypeModel;
	documentType?: string; //*
	documentNumber?: string; //*
	surname?: string; //*
	name?: string; //*
	sex?: string;
	birthday?: Date;
	address?: string;
	email?: string; //*
	phoneNumbers?: string[];
	enabled?: string;
	blocked?: string;
	role?: RoleModel; //*
	roles?: RoleModel[];
	memberEntities?:any;
	// temporal
	store?: string;
    storeName?: string;
	//
	salesPersonCode?:string;
	protocol?:any;
	protocolCode?: string;
	memberTypeCode?: string;
	activated?: string;
}
export interface MemberTypeModel {
	code?: string;
	name?: string;
}