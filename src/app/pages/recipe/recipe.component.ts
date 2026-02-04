import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  activeIndex: number = 2; // Başlangıçta 3. resim aktif (0-indexed: 0=1., 1=2., 2=3.)

  setActive(index: number): void {
    this.activeIndex = index;
  }
}
