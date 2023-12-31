import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLeftComponent } from './button-left.component';

describe('ButtonLeftComponent', () => {
  let component: ButtonLeftComponent;
  let fixture: ComponentFixture<ButtonLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
