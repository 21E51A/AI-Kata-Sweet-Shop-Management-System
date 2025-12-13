export class CreateOrderDto {
  customer: string;
  items: {
    productId: number;
    quantity: number;
  }[];
}
