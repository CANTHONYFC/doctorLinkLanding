import * as FingerprintJS from '@fingerprintjs/fingerprintjs';
import {MatLegacySnackBar as MatSnackBar, MatLegacySnackBarConfig as MatSnackBarConfig} from "@angular/material/legacy-snack-bar";

export default class FingerprintGenerator {
    public static generate(): Promise<string> {
        const promisedFingerprint = new Promise<any>(resolve => {
            const fpPromise = FingerprintJS.load()
            fpPromise.then(fp=>fp.get())
            .then(result=>{
                console.log(result);
                let generatedFingerprint = FingerprintJS.murmurX64Hash128(JSON.stringify(result));

                resolve(generatedFingerprint);
            })

        });

        return promisedFingerprint;
    }
}
