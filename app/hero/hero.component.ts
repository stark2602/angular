import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  showBox1: boolean = true;  

  toggleBoxes() {
    this.showBox1 = !this.showBox1;
}
}
