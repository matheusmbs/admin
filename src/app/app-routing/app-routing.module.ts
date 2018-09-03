import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListarProjetosComponent } from '../starter/starter-content/projetos/listar-projetos/listar-projetos.component';
import { ListarAnalistaComponent } from '../starter/starter-content/analista/listar-analista/listar-analista.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'projeto', pathMatch: 'full' },
      { path: 'projeto', component: StarterComponent, children:[
        { path: '', redirectTo: 'listar-projeto', pathMatch: 'full' },
        {path: 'listar-projeto', component: ListarProjetosComponent}
      ]},
      { path: 'analistas', component: StarterComponent, children:[
        { path: '', redirectTo: 'listar-analistas', pathMatch: 'full' },
        {path: 'listar-analistas', component: ListarAnalistaComponent}
      ]}
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
