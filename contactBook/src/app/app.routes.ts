import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NgModule } from '@angular/core';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'contactList/', component: ContactListComponent },
  { path: 'editContact/:id', component: EditContactComponent },
  { path: '**', redirectTo: '' }, // Ruta 404
];
