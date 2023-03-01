import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';

@Injectable()
export class ProductService {
  private products: ProductDTO[] = [
    { name: 'Mango', id: 1, price: 250 },
    { name: 'Apple', id: 2, price: 150 },
    { name: 'Orange', id: 3, price: 200 },
    { name: 'Banana', id: 4, price: 100 },
    { name: 'Pineapple', id: 5, price: 300 },
    { name: 'Watermelon', id: 6, price: 350 },
  ];

  findAll(): ProductDTO[] {
    return this.products;
  }

  findById(id: number) {
    return this.products.find((p) => p.id === id);
  }

  //ทำการตรวจสอบว่าเงื่อนไขที่ส่งมาเป็นจริงหรือไม่
  findByCondition(predicat: (product: ProductDTO) => boolean) {
    return this.products.filter((p) => predicat(p));
  }
}
