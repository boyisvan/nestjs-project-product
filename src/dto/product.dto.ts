import { IsNotEmpty, IsNumber, MinLength } from "class-validator";


export class ProductDto {

    @MinLength(5,{message:'Tên sản phẩm phải lớn hơn 5 kí tự'})
    name?: string;

    @IsNotEmpty()
    categoryId?: number;

    @MinLength(5, { message: 'Mô tả sản phẩm phải lớn hơn 5 kí tự' })
    des?: string;

    @IsNumber()
    price?: number;
}