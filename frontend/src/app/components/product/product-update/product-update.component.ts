import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit{
  
  constructor(
    private productService: ProductService, 
    private router: Router,
    private route: ActivatedRoute) { }
    
  product!: Product

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'))
      this.productService.readProductById(id).subscribe(product => {
        this.product = product
      })
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(() => {
      this.productService.showMessage('Product updated successfully.')
      this.router.navigate(['/products'])
    })
  }

  cancelOperation(): void {
    this.router.navigate(['/products'])
  }

}
