import { BookDetails } from "./bookDetails";

export class CartResponse{
    public books: BookDetails[] = [];
    public Quantity:number | undefined;
}