export interface commonResType {
  success: boolean,
  message: string,
  data: object | object[],
  error: {
    code: string
  }
}