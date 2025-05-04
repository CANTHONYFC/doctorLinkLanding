import * as Constants from "../constants/constants";
import { HttpHeaders } from "@angular/common/http";
import { getLoggedUser } from "./Storage";

export function buildHeader(): HttpHeaders {
	const token: string = sessionStorage.getItem(Constants.TOKEN);
	const fingerprint: string = sessionStorage.getItem(Constants.FINGERPRINT);
	const signature: string = "MySignature";
	let user = getLoggedUser();

	let headers: HttpHeaders = new HttpHeaders()
		.set(Constants.TOKEN, token)
		.set(Constants.FINGERPRINT, fingerprint)
		.set(Constants.SIGNATURE, signature)
		.set(Constants.ENTITY, user.entity.id)
		.set(Constants.APPLICATION, Constants.APP_POSSYSTEM_ALLOWED)
		.set("Content-Type", "application/json");

	return headers;
}

