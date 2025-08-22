export class NiubizSessionRequest {
  channel: string = 'web'; // Por defecto web
  amount: string; // Monto en string
  antifraud: {
    clientIp: string;
    merchantDefineData: { [key: string]: string };
  };
  dataMap: {
    cardholderCity: string;
    cardholderCountry: string;
    cardholderAddress: string;
    cardholderPostalCode: string;
    cardholderState: string;
    cardholderPhoneNumber: string;
  };

  constructor(data?: Partial<NiubizSessionRequest>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}
