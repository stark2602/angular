import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-most-popular',
  templateUrl: './most-popular.component.html',
  styleUrls: ['./most-popular.component.css']
})
export class MostPopularComponent {
  @Input() title: string = '';
}
