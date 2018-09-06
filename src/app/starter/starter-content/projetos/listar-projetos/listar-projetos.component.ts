import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-listar-projetos',
  templateUrl: './listar-projetos.component.html',
  styleUrls: ['./listar-projetos.component.css']
})


export class ListarProjetosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.table').DataTable();
  }

}
