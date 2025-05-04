export interface Response<T> {
	successful: boolean;
	data?: Data<T>;
	code?: string;
	message?: string;
}

export class Data<T> {
	pagination?: Pagination<T>;
	t?: T;
}
export class Pagination<T> {
	countFilter?: number;
	totalPages?: number;
	list?: T[];
}
