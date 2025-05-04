export interface ApiResponse<T> {
	successful: boolean;
	data?: Data<T>;
	code?: string;
	message?: string;
}

export interface ApiResponse_Deprecated<T> {
    successful: boolean;
    data?: Pagination_Deprecated<T>;
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

export class Pagination_Deprecated<T> {
    count?: number;
    totalPages?: number;
    value?: T[];
}
