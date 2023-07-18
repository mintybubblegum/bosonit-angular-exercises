import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationsService } from 'src/app/shared/validations.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public registerForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    password2: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    check: [false], // Opcional, ya que es un checkbox
    inputState: ['', [Validators.required]],
    city: ['', [Validators.required]]
  }, {
    validators: [
      this.validationsService.isFieldOneEqualToFieldTwo('password','password2'),
    ]
  });

  constructor( 
    private fb: FormBuilder,
    private validationsService: ValidationsService,
    ) {}

  isNotValidField( field: string ) {
    return this.validationsService.isNotValidField( this.registerForm, field );
  }
  
  onSubmit() {
    this.registerForm.markAllAsTouched();
  }
}
