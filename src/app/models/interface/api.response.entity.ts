export interface ApiResponse<T> {
	successful: boolean;
	code: string;
	message: string;
	data?: any;
}
