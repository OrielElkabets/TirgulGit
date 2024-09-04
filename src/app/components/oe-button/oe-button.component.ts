import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'oe-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oe-button.component.html',
  styleUrl: './oe-button.component.scss'
})
export class OeButtonComponent {
  clickHandler() {
    console.log("btn clicked");
  }
}
