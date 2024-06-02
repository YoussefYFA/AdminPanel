import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductaddpageComponent } from './productaddpage.component';

describe('ProductaddpageComponent', () => {
  let component: ProductaddpageComponent;
  let fixture: ComponentFixture<ProductaddpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductaddpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductaddpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
