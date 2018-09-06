import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';import { AdminComponent } from './admin/admin.component';
import { ListarProjetosComponent } from './starter/starter-content/projetos/listar-projetos/listar-projetos.component';
import { CadastrarProjetosComponent } from './starter/starter-content/projetos/cadastrar-projetos/cadastrar-projetos.component';
import { CadastrarAnalistaComponent } from './starter/starter-content/analista/cadastrar-analista/cadastrar-analista.component';
import { ListarAnalistaComponent } from './starter/starter-content/analista/listar-analista/listar-analista.component';
import { DemandasComponent } from './starter/starter-content/projetos/demandas/demandas.component';
import { AnalistaPerfilComponent } from './starter/starter-content/analista/analista-perfil/analista-perfil.component';
import { DemandaUnicaComponent } from './starter/starter-content/projetos/demanda-unica/demanda-unica.component';
import { LoginComponent } from './starter/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    ListarProjetosComponent,
    CadastrarProjetosComponent,
    CadastrarAnalistaComponent,
    ListarAnalistaComponent,
    DemandasComponent,
    AnalistaPerfilComponent,
    DemandaUnicaComponent,
    LoginComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
