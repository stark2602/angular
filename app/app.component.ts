import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events = [
    { image: 'assets/event1.jpg', title: 'Music Concert', date: 'Oct 20, 2024', location: 'New York' },
    { image: 'assets/event2.jpg', title: 'Art Exhibition', date: 'Nov 15, 2024', location: 'San Francisco' },
    { image: 'assets/event3.jpg', title: 'Tech Conference', date: 'Dec 10, 2024', location: 'Austin' },
  ];

  // The filtered events that will be shown on the page
  filteredEvents = [...this.events]; // Initially show all events

  // This function will filter the events based on the search term
  onSearch(event: string) {
    this.filteredEvents = this.events.filter(e => e.title.toLowerCase().includes(event.toLowerCase()));
  }
}
