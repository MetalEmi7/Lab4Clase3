import { Component, OnInit ,Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-listado-de-resultado',
  templateUrl: './listado-de-resultado.component.html',
  styleUrls: ['./listado-de-resultado.component.css']
})
export class ListadoDeResultadoComponent implements OnInit {
@Input()
  Listado;

  constructor() { }

  ngOnInit() {
  }

}
