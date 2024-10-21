import { Component } from '@angular/core';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.css']
})
export class EventPageComponent {
faqs = [
  {
    question: 'When is the event?',
    answer: 'The event will be held on [Event Date] at [Event Time]. Please make sure to arrive at least 15 minutes early for registration.',
    isOpen: false
  },
  {
    question: 'What is the exact location?',
    answer: 'The event will take place at [Event Venue Name], located at [Exact Address, including street, city, and any nearby landmarks].',
    isOpen: false
  },
  {
    question: 'What are the parking arrangements and directions?',
    answer: 'Parking is available at [Parking Facility Name]. The venue provides valet parking, and there are several nearby lots and street parking options. Directions to the event location can be found [here]. Public transport details: [if applicable].',
    isOpen: false
  },
  {
    question: 'Is there room to check my bags?',
    answer: 'Yes, there will be a dedicated bag check area at the venue. You can securely leave your personal items there during the event.',
    isOpen: false
  },
  {
    question: 'What food will be served at the event?',
    answer: 'We will be serving [type of cuisine], including [specific dishes, dietary options such as vegetarian, vegan, gluten-free]. If you have any specific dietary restrictions, please let us know in advance.',
    isOpen: false
  }
];

toggleFaq(faq: any) {
  faq.isOpen = !faq.isOpen;
}

items = [
  { name: 'Item 1', price: 10, quantity: 1 },
  { name: 'Item 2', price: 20, quantity: 1 },
  { name: 'Item 3', price: 30, quantity: 1 }
];

get totalPrice(): number {
  return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

increaseQuantity(index: number): void {
  this.items[index].quantity += 1;
}

decreaseQuantity(index: number): void {
  if (this.items[index].quantity > 0) {
    this.items[index].quantity -= 1;
  }
}
}
