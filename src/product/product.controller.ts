import { ProductDto } from 'src/dto/product.dto';
import { ProductService } from './product.service';
import { Body, Controller, Delete, Get, Param, Post, Put, ValidationPipe } from '@nestjs/common';
import { ReponseData } from 'src/global/globalClass';
import { HttpMessage,HttpStatus } from 'src/global/globalEnum';
import { Products } from 'src/model/product.model';

@Controller('/products')
    
export class ProductController {
    constructor(private readonly productService: ProductService) { };

    @Get()
    getAllProduct(): ReponseData<Products[]> {
        try {
            return new ReponseData<Products[]>(this.productService.getAllProduct(),HttpStatus.SUCCESS,HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<Products[]>(null,HttpStatus.ERROR,HttpMessage.ERROR)
        }
    }

    @Get('/:id')
    detailsProduct(@Param('id') id:number): ReponseData<Products> {
        try {
            return new ReponseData<Products>(this.productService.detailsProduct(id),HttpStatus.SUCCESS,HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<Products>(null,HttpStatus.ERROR,HttpMessage.ERROR)
        }
    }

    @Post()
    createProduct(@Body(new ValidationPipe()) productDto :ProductDto): ReponseData<ProductDto> {
        try {
            return new ReponseData<Products>(this.productService.createProduct(productDto),HttpStatus.SUCCESS,HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<Products>(null,HttpStatus.ERROR,HttpMessage.ERROR)
        }
    }

    @Put('/:id')
    updateProduct(@Body() productDto :ProductDto, @Param('id') id :number): ReponseData<Products> {
        try {
            return new ReponseData<Products>(this.productService.updateProduct(productDto,id),HttpStatus.SUCCESS,HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<Products>(null,HttpStatus.ERROR,HttpMessage.ERROR)
        }
    }


    @Delete('/:id')
    deleteProduct(@Param('id') id: number): ReponseData<boolean> {
        try {
            return new ReponseData<boolean>(this.productService.deleteProduct(id),HttpStatus.SUCCESS,HttpMessage.SUCCESS)
        } catch (error) {
            return new ReponseData<boolean>(null,HttpStatus.ERROR,HttpMessage.ERROR)
        }
    }
}