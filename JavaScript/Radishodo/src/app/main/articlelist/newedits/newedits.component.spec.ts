import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeweditsComponent } from './newedits.component';

describe('NeweditsComponent', () => {
  let component: NeweditsComponent;
  let fixture: ComponentFixture<NeweditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeweditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeweditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
