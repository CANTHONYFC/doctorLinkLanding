
export interface EntityModel {
	id?: string;
	// private FederationDTO federation;
	ruc?: string;
	businessName?: string;
	address?: string;
	enabled?: string;
	licenses?: EntityApplicationModel[];
}
export interface EntityApplicationModel {
	id?: string;
	application?: ApplicationModel;
}
export interface ApplicationModel {
	objectId?: string;
	code?: string;
	name?: string;
	url?: string;
	logoPath?: string;
}
