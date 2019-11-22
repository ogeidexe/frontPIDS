import { Component, OnInit } from '@angular/core';

import {Location} from '@angular/common';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  constructor(private _location: Location) {
  }
  titulo = 'Cadastro de Usuários';
  ngOnInit() {
  }
  backClicked() {
    this._location.back();
  }

}
