import { Component, OnInit } from '@angular/core';
import { Empleado } from '../models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  listEmpleados: Empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Perez', genero: 'Masculino', salario: 70000 },
    { legajo: 2, nombre: 'Maria', apellido: 'Aliaga', genero: 'Femenino', salario: 85000 },
    { legajo: 3, nombre: 'Nicolas', apellido: 'Gomez', genero: 'Masculino', salario: 90000 },
    { legajo: 4, nombre: 'Fernando', apellido: 'Cortes', genero: 'Masculino', salario: 55000 },
    { legajo: 5, nombre: 'Rocio', apellido: 'Escudero', genero: 'Femenino', salario: 60000 },
   ];


  constructor() { }

  ngOnInit(): void {
  }

  getEmpleados(): number {
    return this.listEmpleados.length;
  }

  getMasculinos(): number {
    return this.listEmpleados.filter( list => list.genero === 'Masculino').length;
  }

  getFemeninos(): number {
    return this.listEmpleados.filter( list => list.genero === 'Femenino').length;
  }

}
