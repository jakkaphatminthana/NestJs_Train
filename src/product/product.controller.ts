import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  // ?: คือการสามารถใส่ได้หรือไม่ก็ได้
  // ถ้ามีการใส่ค่า name จะทำการค้นหาตาม name แต่ถ้าไม่มีจะทำการแสดงทั้งหมด
  @Get()
  getProductAll(@Query('name') productName?: string): ProductDTO[] {
    if (productName) {
      return this.productService.findByCondition((product) =>
        product.name.includes(productName),
      );
    }
    return this.productService.findAll();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.findById(Number(id));
  }
}
