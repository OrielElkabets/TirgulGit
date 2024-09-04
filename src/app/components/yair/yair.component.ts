import { Component } from '@angular/core';

@Component({
  selector: 'app-yair',
  standalone: true,
  imports: [],
  templateUrl: './yair.component.html',
  styleUrl: './yair.component.scss'
})
export class YairComponent {
  i = 0
  click(){
    this.i++    
  }

}
