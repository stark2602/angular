import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';

  // EventEmitter to send search term to the parent component
  @Output() search = new EventEmitter<string>();

  // Triggered whenever search input changes
  onSearchChange() {
    this.search.emit(this.searchTerm);  // Emit the search term to the parent component
  }
}
