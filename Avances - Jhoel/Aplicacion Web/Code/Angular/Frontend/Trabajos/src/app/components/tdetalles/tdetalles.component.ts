import { Component, OnInit, HostBinding } from '@angular/core';
import { TrabajoDetallesService } from '../../services/trabajoDetalles.service';
import { TrabajoDetalles } from 'src/app/models/TrabajoDetalles';

@Component({
  selector: 'app-tdetalles',
  templateUrl: './tdetalles.component.html',
  styleUrls: ['./tdetalles.component.css']
})
export class TdetallesComponent implements OnInit {
  @HostBinding('class') classes = 'center';

  trabajo: any = [];
  trabajoD: any;

  constructor(private trabajoDetallesService: TrabajoDetallesService) { }

  ngOnInit() {
    this.getTrabajos();
  }

  getTrabajos() {
    this.trabajoDetallesService.getTrabajos()
      .subscribe(
        res => {
          this.trabajo = res;
        },
        err => console.error(err)
      );
  }

  getTrabajo(idTrabajo: string) {
    this.trabajoDetallesService.getTrabajo(idTrabajo)
      .subscribe(
        res => {
          console.log(res);
          this.trabajoD = res;
        },
        err => console.error(err)
      )
  }
}