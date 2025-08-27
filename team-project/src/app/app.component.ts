import { Component } from '@angular/core';
import {USERS} from "./user/users";

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }
  onSelectedUser(id: string) {
    this.selectedUserId = id;
  }
}
