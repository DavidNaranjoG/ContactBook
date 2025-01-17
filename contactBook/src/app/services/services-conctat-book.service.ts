import { Injectable } from '@angular/core';
import { contactData } from '../data/contactsData';
import { Contact } from '../models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ServicesConctatBookService {
  constructor() {
    console.log("este es el contacto actualizado", this.updateContact)
   }

  updateContact(contactId: number, updatedContact: Contact): void {
    const index = this.contactData.findIndex(c => c.id === contactId);
    if (index !== -1) {
      this.contactData[index] = updatedContact;
    } else {
      console.warn(`Contacto con ID ${contactId} no encontrado para actualizar.`);
    }
  }
  private contactData: Contact[] = contactData;

 


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
