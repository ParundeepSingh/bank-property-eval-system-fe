import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewValuationComponent } from './new-valuation.component';

describe('NewValuationComponent', () => {
  let component: NewValuationComponent;
  let fixture: ComponentFixture<NewValuationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewValuationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewValuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
