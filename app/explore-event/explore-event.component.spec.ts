import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreEventComponent } from './explore-event.component';

describe('ExploreEventComponent', () => {
  let component: ExploreEventComponent;
  let fixture: ComponentFixture<ExploreEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreEventComponent]
    });
    fixture = TestBed.createComponent(ExploreEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
