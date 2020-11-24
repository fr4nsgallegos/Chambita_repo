import { Component, OnInit, HostBinding } from '@angular/core';
import { Trabajo } from 'src/app/models/Trabajos';
import { TrabajosService } from 'src/app/services/trabajos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tformulario',
  templateUrl: './tformulario.component.html',
  styleUrls: ['./tformulario.component.css']
})
export class TformularioComponent implements OnInit {

@HostBinding('class') clases = 'center';

  trabajo: Trabajo = {
    idTrabajo: 0,
    nombreTrabajo: '',
    descTrabajo: '',
    pagoTrabajo: 0,
    estado: "",
    fechaInicio: new Date(),
    fechaFinal: new Date(),
    plazoPostulacion: new Date(),
    distrito: '',
    direccion: '',
    dniEmpleador: 0
  };

  edit: boolean = false;

  constructor(private trabajoService: TrabajosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.idTrabajo) {
      this.trabajoService.getTrabajo(params.idtrabajo)
        .subscribe(
          res => {
            console.log(res);
            this.trabajo = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewTrabajo() {
    delete this.trabajo.idTrabajo;
    this.trabajoService.saveTrabajo(this.trabajo)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        err => console.error(err)
      )
  }

  updateTrabajo() {
    this.trabajoService.updateTrabajo(this.trabajo.idTrabajo, this.trabajo)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/home']);
        },
        err => console.error(err)
      )
  }
}