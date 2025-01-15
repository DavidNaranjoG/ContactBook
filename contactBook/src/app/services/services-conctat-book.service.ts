import { Injectable } from '@angular/core';
import { contactData } from '../data/contactsData';
import { Contact } from '../models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ServicesConctatBookService {
  private contactData: Contact[] = contactData;

  constructor() { }


  getContacts(): Contact[] {    
    console.log(this.contactData)
    return this.contactData
  }

  //metodo para eliminar un contacto
  deleteContact(id: number): Contact []{
    if (!this.contactData.some(contact => contact.id === id)) {
      console.warn(`Contacto con id ${id} no encontrado.`);
    }
    this.contactData  = this.contactData.filter(contact => contact.id != id);
    console.log("esta es la lista nueva: ", contactData)
    return this.contactData;
  }

  
}
