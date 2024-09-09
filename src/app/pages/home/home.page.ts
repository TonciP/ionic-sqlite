import { Component } from '@angular/core';
import { PersonaBLL } from 'src/app/bll/PersonaBLL';
import { DbService } from '../../services/db.service';
import { Persona } from '../../models/Persona';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  personaBLL: PersonaBLL = new PersonaBLL();
  listaPersonas: Persona[] = [];
  constructor(private db: DbService) {
    this.personaBLL.insert(db, 'Juan', 'Perez', 20, '2020-01-01');
    this.cargarLista();
  }
  cargarLista() {
    this.personaBLL.selectAll(this.db).then(res => {
      if (res.rows.length > 0) {
        this.listaPersonas = [];
        for (let i = 0; i < res.rows.length; i++) {
          const row = res.rows.item(i);
          this.listaPersonas.push(row);
        }
      }
    });
  }

}
