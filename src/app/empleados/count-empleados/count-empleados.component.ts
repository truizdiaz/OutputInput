import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {

  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;

  constructor() { }

  ngOnInit(): void {
  }

}
