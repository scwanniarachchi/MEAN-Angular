import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerComponent } from './seller.component';

describe('SellerComponent', () => {
  let component: SellerComponent;
  let fixture: ComponentFixture<SellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
