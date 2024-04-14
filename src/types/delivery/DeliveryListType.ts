export interface DeliveryType {
  deliveryAddressId: number,
  addressName: string,
  recipient: string,
  phoneNumber: string,
  zip: string,
  post: string,
  street: string,
  defaultCheck: boolean
}

export interface DeliveryListType {
  map(arg0: (delivery: DeliveryType) => import("react").JSX.Element): import("react").ReactNode
  deliveryList: DeliveryType[]
}