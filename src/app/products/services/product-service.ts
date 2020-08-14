import { Injectable, EventEmitter } from '@angular/core';

import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

import { ProductModel } from '../models/product.model';
import { CartService } from 'src/app/cart/services/cart-list-service';
import { ProductRepository } from 'src/app/shared/repositories/product-repository';
import { CartModel } from 'src/app/cart/models/cart.model';

@Injectable()
export class ProductService {
    isProductListChanged = new EventEmitter<void>();

    private availableProducts: Observable<ProductModel[]>;

    constructor(private cartService: CartService, private productRepository: ProductRepository) {
        this.availableProducts = of(this.productRepository.getProducts());
        this.productRepository.isAvailableProductListChanged.subscribe(
            () => this.availableProducts = of(this.productRepository.getProducts()));
     }

    getProducts(): Observable<ProductModel[]> {
        return this.availableProducts;
    }

    addProductToCart(product: ProductModel, numberOfProducts: number) {
        this.cartService.increaseQuantity(new CartModel(product.id, product.name, product.price, 1), numberOfProducts);
        this.isProductListChanged.emit();
    }
}
