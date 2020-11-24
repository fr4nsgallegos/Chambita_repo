import { Component, OnInit, HostBinding } from '@angular/core';
import { TrabajosService } from '../../services/trabajos.service';
import { Trabajo } from 'src/app/models/Trabajos';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @HostBinding('class') classes = 'center';

  trabajos: any = [];
  trabajosD: Trabajo;

  constructor(private trabajoService: TrabajosService) { }

  ngOnInit() {
    this.getTrabajos();
  }

  getTrabajos() {
    this.trabajoService.getTrabajos()
      .subscribe(
        res => {
          this.trabajos = res;
        },
        err => console.error(err)
      );
  }

  getTrabajo(idTrabajo: string) {
    console.log(idTrabajo);
    console.log( this.trabajoService.getTrabajo(idTrabajo));
    this.trabajoService.getTrabajo(idTrabajo)
      .subscribe(
        res => {
          console.log(res);
         //this.trabajosD = res;
        },
        err => console.error(err)
      )
  }

  deleteTrabajos(idTrabajo: string) {
    this.trabajoService.deleteTrabajo(idTrabajo)
      .subscribe(
        res => {
          console.log(res);
          this.getTrabajos();
        },
        err => console.error(err)
      )
  }
}