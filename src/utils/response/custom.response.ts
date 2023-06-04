export interface CustomResponse<T> {
    timestamp: Date,
    status: boolean;
    statusCode: number;
    data?: T;
    error?: T
}