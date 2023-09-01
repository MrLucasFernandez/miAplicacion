import { Component, OnInit } from '@angular/core';
import { LoginPage } from '../login/login.page';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-restore',
  templateUrl: './restore.page.html',
  styleUrls: ['./restore.page.scss'],
})
export class RestorePage implements OnInit {

  constructor(private route: Router) {}

  users = {
    nombre: "",
    apellido: "",
    email: "",
    tipo: "",
    username: "",
    password: "",
  }

  userRestoreRestart(): void{
    this.users.nombre = "",
    this.users.apellido = "",
    this.users.email = "",
    this.users.tipo = "",
    this.users.username = "",
    this.users.password = ""
  }
  
  

  ngOnInit() {
    this.userRestoreRestart;
  }

}
