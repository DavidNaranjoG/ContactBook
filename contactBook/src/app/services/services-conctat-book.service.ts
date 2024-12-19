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

  
}
