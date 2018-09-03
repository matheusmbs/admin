import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAnalistaComponent } from './listar-analista.component';

describe('ListarAnalistaComponent', () => {
  let component: ListarAnalistaComponent;
  let fixture: ComponentFixture<ListarAnalistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAnalistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAnalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
