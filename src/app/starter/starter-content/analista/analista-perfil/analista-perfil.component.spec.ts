import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalistaPerfilComponent } from './analista-perfil.component';

describe('AnalistaPerfilComponent', () => {
  let component: AnalistaPerfilComponent;
  let fixture: ComponentFixture<AnalistaPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalistaPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalistaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
