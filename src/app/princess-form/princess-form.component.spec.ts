import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincessFormComponent } from './princess-form.component';

describe('PrincessFormComponent', () => {
  let component: PrincessFormComponent;
  let fixture: ComponentFixture<PrincessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
