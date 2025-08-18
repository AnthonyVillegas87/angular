import {Component, Input, Output, EventEmitter, output} from "@angular/core";
import {type User } from './user.model'



@Component({
  selector: "app-user",
  standalone: true,
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})


export class UserComponent {
  @Input({ required:true }) user!: User;
  @Output() selectedUsername = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }


  onSelectedUser() {
    this.selectedUsername.emit(this.user.id);
  }
}
