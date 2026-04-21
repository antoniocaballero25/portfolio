import { Component, inject, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormGroupDirective } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ContactService, DatosContacto } from '../../services/contact.service'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule, 
    TranslateModule, 
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private contactService = inject(ContactService); 

  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  isSending = signal<boolean>(false);

  contactForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mensaje: ['', [Validators.required, Validators.minLength(10)]]
  });

  enviarMensaje() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending.set(true);
    const datosDelFormulario = this.contactForm.value as DatosContacto;

    this.contactService.enviarCorreo(datosDelFormulario).subscribe({
      next: (respuesta) => {
        this.snackBar.open('¡Mensaje enviado con éxito!', 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });

        this.contactForm.reset();
        
        if (this.formGroupDirective) {
          this.formGroupDirective.resetForm();
        }
      },
      error: (err) => {
        this.snackBar.open('Hubo un error al enviar el mensaje.', 'Cerrar', { duration: 3000 });
      },
      complete: () => {
        this.isSending.set(false);
      }
    });
  }
}