import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllItemsComponent } from './all-items.component';

describe('AllItemsComponent', () => {
  let component: AllItemsComponent;
  let fixture: ComponentFixture<AllItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
