import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditContactComponent } from "./components/edit-contact/edit-contact.component";
import { ContactListComponent } from "./components/contact-list/contact-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EditContactComponent, ContactListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contactBook';
}
