import { Component } from '@angular/core';
import { CategorySelectionComponent } from '../../components/category-selection/category-selection.component';
import { FeaturedProductsComponent } from '../../components/featured-products/featured-products.component';
import { HeroBannerComponent } from '../../components/hero-banner/hero-banner.component';
import { PromoBannerComponent } from '../../components/promo-banner/promo-banner.component';
import { TrendingProductsComponent } from '../../components/trending-products/trending-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategorySelectionComponent,
            FeaturedProductsComponent,
            HeroBannerComponent,
            PromoBannerComponent,
            TrendingProductsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
