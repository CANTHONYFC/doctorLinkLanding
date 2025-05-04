import * as CryptoJS from "crypto-js";

export function passwordToHash(message: string, payload: string): string {
	const hashedPayload: string = CryptoJS.SHA256(
		payload
			.split("")
			.reverse()
			.join("")
	).toString();

	const hCode = CryptoJS.SHA256(`${message}::${hashedPayload}`).toString();

	return hCode;
}
