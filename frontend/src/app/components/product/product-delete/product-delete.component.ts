import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit{

  product!: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.productService.readProductById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productService.deleteProductById(this.product.id).subscribe(() => {
      this.productService.showMessage('Product deleted successfully.')
      this.router.navigate(['/products'])
    })
  }

  cancelOperation(): void {
    this.router.navigate(['/products'])
  }

}
