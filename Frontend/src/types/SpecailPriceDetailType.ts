interface Product {
  productId: number;
}

export interface SpecailPriceDetailType {
    lowestPrice: number,
    thumbnailUrl: string,
    specialPriceName: string,
    specialPriceProductList: Product[]
  }