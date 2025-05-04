export interface ApiResponse<T> {
    data?: T;
    successful: boolean;
    code?: string;
    message?: string;
}
