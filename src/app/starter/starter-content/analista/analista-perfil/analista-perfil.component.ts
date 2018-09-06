import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-analista-perfil',
  templateUrl: './analista-perfil.component.html',
  styleUrls: ['./analista-perfil.component.css']
})
export class AnalistaPerfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.table').DataTable();
  }

}
