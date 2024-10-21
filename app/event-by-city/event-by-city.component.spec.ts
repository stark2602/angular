import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventByCityComponent } from './event-by-city.component';

describe('EventByCityComponent', () => {
  let component: EventByCityComponent;
  let fixture: ComponentFixture<EventByCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventByCityComponent]
    });
    fixture = TestBed.createComponent(EventByCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
