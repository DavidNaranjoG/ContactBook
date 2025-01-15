import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { CommonModule } from '@angular/common';
import { ServicesConctatBookService } from '../../services/services-conctat-book.service';
import { Contact } from '../../models/contacts';

@Component({
  selector: 'contactList',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  
  contacts: Contact[] = [];

  constructor(private contactServices: ServicesConctatBookService, private router: Router ) {
    
  }
  ngOnInit(): void {
    this.cargarContactos();
  }
  

  cargarContactos(): void {
    this.contacts = this.contactServices.getContacts();
  }

  deleteContact(id: number): void {
    if (confirm('Estas seguro que desea eliminar este contacto?')){
      this.contactServices.deleteContact(id);
      //Actualizar vista
      this.cargarContactos();
    }
    }
}
