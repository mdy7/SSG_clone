export interface OrderInformationType {
    orderNumber: number,
    orderId: number,
    receiverName: string,
    phoneNumber: string,
    totalPrice: number,
    orderStatus: string,
    orderDate: string,
    orderPhoneNumber: string,
    region: string,
    orderProductList: OrderProductListType[],
  }

export interface OrderProductListType {
    productName: string,
    addOption: string,
    color: string,
    size: string,
    count: number,
    price: number,
    brand: string,
    thumbnail: string,
}