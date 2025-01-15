import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NgModule } from '@angular/core';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

export const routes: Routes = [
  { path:'editContact:id', component: EditContactComponent}
];
