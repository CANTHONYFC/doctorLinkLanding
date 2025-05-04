import { Permission } from "../models/permission.model";
import { EntityModel } from "./entity.model";

export interface RoleModel {
	id?: string;
	code?: string;
	name?: string;
	description?: string;
	enabled?: string;
	entity?: EntityModel;
	permissions?: Permission[];
}
