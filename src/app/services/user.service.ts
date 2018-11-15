import { User } from '../models/User.model';
import { Subject } from 'rxjs/Subject';

export class UserService {
  private users: User[] = [
    new User('John', 'Smith', 'john.smith@gmail.com', 'L\'eau du robinet', ['Gaming', 'Salle de sport', 'Voyages'])
];

  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
