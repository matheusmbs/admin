import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandaUnicaComponent } from './demanda-unica.component';

describe('DemandaUnicaComponent', () => {
  let component: DemandaUnicaComponent;
  let fixture: ComponentFixture<DemandaUnicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandaUnicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandaUnicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
