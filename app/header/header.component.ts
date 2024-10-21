import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  location: string = '';
  date: string = '';
  eventType: string = '';

  @Output() search = new EventEmitter<{ location: string; date: string; eventType: string }>();

  onSearch() {
    this.search.emit({
      location: this.location,
      date: this.date,
      eventType: this.eventType
    });
  }
}
