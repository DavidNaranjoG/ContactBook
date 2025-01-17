import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Contact } from '../../models/contacts';
import { ServicesConctatBookService } from '../../services/services-conctat-book.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'editContact',
  standalone: true,
  imports: [RouterModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent implements OnInit {

  contactForm!: FormGroup;
  contactId!: number;
  originalContact!: Contact;

  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private servicesContactBook: ServicesConctatBookService
  ){}


  ngOnInit(): void {

    //obtener el id del contacto desde la ruta
    this.contactId = Number(this.route.snapshot.paramMap.get('id'));

    //Cargar el contacto original

    this.originalContact = this.servicesContactBook.getContacts().find(c => c.id === this.contactId)!;

    if (!this.originalContact) {
      console.error(`No se encontró el contacto con ID ${this.contactId}.`);
      this.router.navigate(['']); // Redirige si el contacto no existe
      return;
    }
 
    // Inicializar el formulario con los datos del gasto
    this.contactForm =this.fb.group({
      Nombre:[this.originalContact.name, Validators.required],
      Apellido:[this.originalContact.lastName, Validators.required],
      Direccion: [this.originalContact.address, Validators.required],
      Correo: [this.originalContact.email, Validators.required],
      Telefono: [this.originalContact.phone, Validators.required]
    })

  }

  saveUpdatedContact(): void {
    if(this.contactForm.valid){
      const updatedContact: Contact = {
        ...this.originalContact,
        name: this.contactForm.value.Nombre,
        lastName: this.contactForm.value.Apellido,
        address: this.contactForm.value.Direccion,
        email: this.contactForm.value.Correo,
        phone: this.contactForm.value.Telefono
      };

      //actualizar contacto en el servicio
      this.servicesContactBook.updateContact(this.contactId, updatedContact);

      //Redirigir a la pagina de contactos
      this.router.navigate([''])
    } 
    
  }
  cancelar(): void {
    this.router.navigate(['']);
  }

}
