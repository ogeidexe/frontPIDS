import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Input, Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  {
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();

  loginForm = new FormGroup({
    cpf: new FormControl('',Validators.required),
    senha: new FormControl('',Validators.required),
  });

  // checkCPF(){
  //   this.
  // }



  submit() {
    if (this.loginForm.valid) {
      this.submitEM.emit(this.loginForm.value);
    }
  }
}
