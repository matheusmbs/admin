import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListarProjetosComponent } from '../starter/starter-content/projetos/listar-projetos/listar-projetos.component';
import { ListarAnalistaComponent } from '../starter/starter-content/analista/listar-analista/listar-analista.component';
import { CadastrarProjetosComponent } from '../starter/starter-content/projetos/cadastrar-projetos/cadastrar-projetos.component';
import { CadastrarAnalistaComponent } from '../starter/starter-content/analista/cadastrar-analista/cadastrar-analista.component';
import { DemandasComponent } from '../starter/starter-content/projetos/demandas/demandas.component';
import { AnalistaPerfilComponent } from '../starter/starter-content/analista/analista-perfil/analista-perfil.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'projeto', pathMatch: 'full' },
      { path: 'projeto', component: StarterComponent, children:[
        { path: '', redirectTo: 'listar-projetos', pathMatch: 'full' },
        {path: 'listar-projetos', component: ListarProjetosComponent},
        {path: 'cadastrar-projetos', component: CadastrarProjetosComponent},
        {path: 'demandas', component:DemandasComponent}
      ]},
      { path: 'analistas', component: StarterComponent, children:[
        { path: '', redirectTo: 'listar-analistas', pathMatch: 'full' },
        {path: 'listar-analistas', component: ListarAnalistaComponent},
        {path: 'cadastrar-analistas', component: CadastrarAnalistaComponent},
        {path: 'perfil', component: AnalistaPerfilComponent}
      ]}
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
