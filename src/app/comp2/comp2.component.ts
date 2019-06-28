import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  mensagens = [];

  constructor() { }

  ngOnInit() {
    EventEmitterService.get('meuEvento').subscribe(data => this.mensagens.push(data));
  }

}
