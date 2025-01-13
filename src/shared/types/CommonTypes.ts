export interface ApiResponse<T> {
    statusCode: number;
    message: string;
    payload?: T;
  }