import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarComponent2 } from './bar2.component';

describe('BarComponent', () => {
  let component: BarComponent2;
  let fixture: ComponentFixture<BarComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarComponent2]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
