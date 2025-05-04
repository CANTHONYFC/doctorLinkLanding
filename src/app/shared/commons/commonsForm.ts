import { Injector } from "@angular/core";
import moment from "moment";
import 'moment/locale/es'; // Solo si necesitas el español
moment.locale('es'); // Establece el idioma

export class CommonForm {
	/**Services*/
	//public storeDomain: StoreService;
	docYear: string = moment().year().toString();
	addFormatDate: string = 'T05:00:00.000Z';
	format_ymd: string = 'YYYY-MM-DD';

	naow = new Date();

	constructor(injector: Injector) {
		/**Injectar servicios */
		//this.router = injector.get(Router);
		this.getMaxDate();
	}

	public getMaxDate() :void{
		this.naow.setDate(this.naow.getDate() + 0);
	}

}
