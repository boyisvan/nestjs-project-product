import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Products } from 'src/model/product.model';

@Injectable()
export class ProductService {
    
    private products: Products[] = [
        { id: 1, name:"Quạt",categoryId:1,des:"hàng mới",price:2000},
        { id: 2, name:"Tủ",categoryId:2,des:"hàng hot",price:5000},
    ]

    getAllProduct() : Products[] {
        return this.products;
    }
    detailsProduct(id:number): Products  {
        return this.products.find(item=>item.id===Number(id));  
    }
    createProduct(productDto:ProductDto): Products {
        const product: Products = {
            id: Math.random(),
            ...productDto,
        }
        this.products.push(product)
        return product;
    }

    updateProduct(productDto: ProductDto, id: number): Products {
        const index = this.products.findIndex(item => item.id === Number(id));
        this.products[index].categoryId = productDto.categoryId;
        this.products[index].name = productDto.name;
        this.products[index].des = productDto.des;  
        this.products[index].price = productDto.price;
        return this.products[index];
    }
    deleteProduct(id: number): boolean {
        const index = this.products.findIndex(item => item.id === Number(id));
        if (index !== -1) {
            this.products.splice(index, 1);
            return true
        }
        return false;
    }

}