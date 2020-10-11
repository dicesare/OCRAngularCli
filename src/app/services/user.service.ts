import {User} from '../models/User';
import {Subject} from 'rxjs';

export class UserService {
  private users: User[] = [
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
  ];
  userSubject = new Subject<User[]>();
  // tslint:disable-next-line:typedef
  emitUser() {
    this.userSubject.next(this.users.slice());
  }
  // tslint:disable-next-line:typedef
  addUser(user: User) {
    this.users.push(user);
    this.emitUser();
  }
}
