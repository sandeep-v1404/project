import { Image } from "./ImageInterface";

export interface Product {
    Name: string;
    Description: string;
    ActualPrice: number;
    DiscountPrice: number;
    DiscountPercent: number;
    Availability: string;
    Visibility: string;
    Sku: string;
    Stock: number;
    Tags: string[];
    Details: { field: string, value: string }[];
    Images: Image[]
}
export interface ProductId extends Product {
    Id: string;
}