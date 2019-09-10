export interface GenericResponse<T> {
  statusCode: number;
  message: string;
  response: T;
}
