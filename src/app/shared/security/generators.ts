import * as CryptoJS from "crypto-js";

export function hash(value: string): string {
	return CryptoJS.SHA256(value).toString();
}
