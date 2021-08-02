import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  menu = [
    {
      name: 'Inicio',
      route: '/inicio',
    },
    {
      name: 'Productos',
      route: '/productos',
    },
    {
      name: 'Acerca De',
      route: '/acerca',
    },
    {
      name: 'Contacto',
      route: '/contacto',
    },
  ];
}
