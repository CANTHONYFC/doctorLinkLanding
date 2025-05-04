import * as moment from "moment";

export default class DateFormat {

  public static generateCodeOrder(): string {
    const myDate = new Date();
    const stringCode = moment(myDate).format('YYYYMMDDHHmmss');

    return stringCode;
  }

}

export const FormatOrderSale = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

export function getFormatRqst(value:string) {
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
}