import { Component, OnInit, HostBinding } from '@angular/core';
import { Usuario } from 'src/app/models/Usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

	@HostBinding('class') clases = 'center';

  usuario: Usuario = {
    id: 0,
    correo: '',
    clave: '',
    nro_celular: '',
    tipoUsuario: ''
  };

  edit: boolean = false;

  constructor(private usuarioService: UsuariosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.usuarioService.getUsuario(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.usuario = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  saveNewUsuario() {
    delete this.usuario.id;
    this.usuarioService.saveUsuario(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/login']);
        },
        err => console.error(err)
      )
  }

  updateUsuario() {
    this.usuarioService.updateUsuario(this.usuario.id, this.usuario)
      .subscribe(
        res => { 
          console.log(res);
          this.router.navigate(['/login']);
        },
        err => console.error(err)
      )
  }
}