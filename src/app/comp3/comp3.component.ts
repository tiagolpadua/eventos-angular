import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  mensagens = [];

  constructor() { }

  ngOnInit() {
    EventEmitterService.get('meuEvento').subscribe(data => this.mensagens.push(data));
  }

}
