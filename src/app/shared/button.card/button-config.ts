export interface MatButtonConfig {
	tooltip?: string;
	icon: string;
	action?: () => any;
	shown: boolean;
	disabled: boolean;
}
export class MatButtonConfigModel {
	id?:string;
	type?:string;
	class?:string;
	classIcon?:string;
	tooltip?: string;
	icon?: string;
	action?: () => any;
	shown?: boolean;
	disabled?: boolean;
	loading?:boolean;
	title?:string;
    color?: string;
	constructor() {
        this.type = 'mat-mini-fab';
        this.class = 'mx-1';
		this.shown= true;
		this.disabled= false;
    }
}
