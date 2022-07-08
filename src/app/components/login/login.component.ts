import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: UntypedFormGroup
  loading = false

  constructor(private fb: UntypedFormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  ingresar(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    // validamos usario de esta forma pq aun no tenemos un backend
    if(usuario == 'vazbaumax' && password == 'admin123'){
      //entra al dashboard

      this.fakeLoading()
    } else {
      //mensaje de error
      this.error()
      this.form.reset()
    }
  }

  error(){
    this._snackBar.open('❌ Datos incorrectos. Intenta de nuevo', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
  
  fakeLoading(){
    this.loading = true
    setTimeout(() => {
      //redireccionar al dashboard
      this.router.navigate(['dashboard'])
    }, 1500);
  }
}
