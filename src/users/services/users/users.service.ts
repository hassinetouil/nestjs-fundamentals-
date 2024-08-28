import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/type';

@Injectable()
export class UsersService {
  private fakeUsers = [
      { username: 'hassine', email: 'hassine.touil@gmail.com' },
      { username: "hamza", email: "hamza.touil@gmail.com" },
      {username:"oumaima",email: "oumaima.touil@gmail.com"}
  ];
  fetchUsers() {
    return this.fakeUsers;
    }
    createUser(userDetails: CreateUserType) {
        this.fakeUsers.push(userDetails)
        return;
    }
    fetchUserById(id: number) {
        return {id,username: "hassine",email:"hassine.touil@gmail.com"}
    }
}
