import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandasComponent } from './demandas.component';

describe('DemandasComponent', () => {
  let component: DemandasComponent;
  let fixture: ComponentFixture<DemandasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
