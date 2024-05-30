import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatetButtonComponent } from './animatet-button.component';

describe('AnimatetButtonComponent', () => {
  let component: AnimatetButtonComponent;
  let fixture: ComponentFixture<AnimatetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimatetButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimatetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
