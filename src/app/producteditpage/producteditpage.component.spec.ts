import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducteditpageComponent } from './producteditpage.component';

describe('ProducteditpageComponent', () => {
  let component: ProducteditpageComponent;
  let fixture: ComponentFixture<ProducteditpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducteditpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProducteditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
