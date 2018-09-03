import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAnalistaComponent } from './cadastrar-analista.component';

describe('CadastrarAnalistaComponent', () => {
  let component: CadastrarAnalistaComponent;
  let fixture: ComponentFixture<CadastrarAnalistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarAnalistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAnalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
