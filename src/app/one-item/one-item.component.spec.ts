import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneItemComponent } from './one-item.component';

describe('OneItemComponent', () => {
  let component: OneItemComponent;
  let fixture: ComponentFixture<OneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
