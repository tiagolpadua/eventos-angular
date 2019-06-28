import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  emitirEvento() {
    EventEmitterService.get('meuEvento').emit('Payload do Evento');
  }

}
