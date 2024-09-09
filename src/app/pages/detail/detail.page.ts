import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../../models/Persona';
import { PersonaBLL } from '../../bll/PersonaBLL';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  persona: Persona;
  personaBLL: PersonaBLL = new PersonaBLL();

  constructor(private db: DbService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.cargarPersona(params.get('id'));
    });
  }
  cargarPersona(id: string) {
    this.personaBLL.selectById(this.db, id).then(res => {
      if (res.rows.length > 0) {
        this.persona = res.rows.item(0);
      }
    });
  }

  ngOnInit() {
  }

}
