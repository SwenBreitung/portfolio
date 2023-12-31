import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjektsComponent } from './my-projekts.component';

describe('MyProjektsComponent', () => {
  let component: MyProjektsComponent;
  let fixture: ComponentFixture<MyProjektsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProjektsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyProjektsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
