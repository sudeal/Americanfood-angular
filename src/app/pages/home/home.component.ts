import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RecipeComponent } from '../recipe/recipe.component';
import { OrderComponent } from '../order/order.component';
import { TasteComponent } from '../taste/taste.component';
import { AboutComponent } from '../about/about.component';
import { BlogComponent } from '../blog/blog.component';
import { ProfileComponent } from '../profile/profile.component';
import { MapComponent } from '../map/map.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RecipeComponent, OrderComponent, TasteComponent, AboutComponent, BlogComponent, ProfileComponent, MapComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
