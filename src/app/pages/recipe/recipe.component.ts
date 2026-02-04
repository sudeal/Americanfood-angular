import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
  activeIndex: number = 0;
  isMobile = false;

  @HostListener('window:resize')
  onResize(): void {
    this.isMobile = window.innerWidth <= 900;
  }

  ngOnInit(): void {
    this.onResize();
  }

  setActive(index: number): void {
    this.activeIndex = index;
  }

  prev(): void {
    this.activeIndex = this.activeIndex === 0 ? 2 : this.activeIndex - 1;
  }

  next(): void {
    this.activeIndex = this.activeIndex === 2 ? 0 : this.activeIndex + 1;
  }
}
