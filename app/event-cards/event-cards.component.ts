import { Component, Input } from '@angular/core';
import { ImageVisibilityDirective } from '../directives/image-visibility.directive';
@Component({
  selector: 'app-event-cards',
  templateUrl: './event-cards.component.html',
  styleUrls: ['./event-cards.component.css']
})
export class EventCardsComponent {

  @Input() filteredEvents: any[] = [];  // Declare the Input property
  // Original list of events
  events = [
    { image: 'assets/event1.jpg', title: 'Music Concert', date: 'Oct 20, 2024', location: 'New York' },
    { image: 'assets/event2.jpg', title: 'Art Exhibition', date: 'Nov 15, 2024', location: 'San Francisco' },
    { image: 'assets/event3.jpg', title: 'Tech Conference', date: 'Dec 10, 2024', location: 'Austin' },
  ];

  // Filtered list of events based on search
  // filteredEvents = [...this.events];

  // Function to handle search term received from SearchBar component
  onSearch(event: string) {
    this.filteredEvents = this.events.filter(e => e.title.toLowerCase().includes(event.toLowerCase()));
  }
}
