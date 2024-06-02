import { Injectable } from '@angular/core';
import { UserCredentialsInterface } from '../Usercredentialsinterface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userCredentialsList: UserCredentialsInterface[] = [
    {
      username: 'youssef',
      password: '12345678',
      email: 'youssef@adminpanel.com',
      mobile: '0100200300',
    },
    {
      username: 'user2',
      password: '12345678',
      email: 'user2@adminpanel.com',
      mobile: '0100200300',
    },
    {
      username: 'user3',
      password: '12345678',
      email: 'user3@adminpanel.com',
      mobile: '0100200300',
    },
  ];

  constructor() {}
  userSignup() {
    console.warn('service called');
  }
  getUsers() {
    return this.userCredentialsList
  }
}
