import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProjetosComponent } from './cadastrar-projetos.component';

describe('CadastrarProjetosComponent', () => {
  let component: CadastrarProjetosComponent;
  let fixture: ComponentFixture<CadastrarProjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarProjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
