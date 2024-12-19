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

  constructor(private contactServices: ServicesConctatBookService ) {
    
  }
  ngOnInit(): void {
    this.cargarGasto();
  }
  

  cargarGasto(): void {
    this.contacts = this.contactServices.getContacts();
  }
}
