import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieschartComponent } from './categorieschart.component';

describe('CategorieschartComponent', () => {
  let component: CategorieschartComponent;
  let fixture: ComponentFixture<CategorieschartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieschartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorieschartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
