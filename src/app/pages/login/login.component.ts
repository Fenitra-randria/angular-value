import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule,FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  // Data
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  disableButton=false;
  matcher = new MyErrorStateMatcher();

  // Methods
  login() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      // Log a message to the console only if both form controls are valid
      console.log('Form is valid. Logging in...');
      // this.disableButton = false;
      // Add your login logic here
    } else {
      // Log an error message if the form is not valid
      // this.disableButton = true;
    }
  }
}
