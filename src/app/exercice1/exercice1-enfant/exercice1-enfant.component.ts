import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  
  @Output() changeValue = new EventEmitter();

  value: number = 0;
  
  incremente(): void {
    this.value++;
    this.changeValue.emit({
      newValue: this.value
    });
  }

  decremente(): void {
    this.value--;
    this.changeValue.emit({
      newValue: this.value
    });
  }
  
  constructor() { }

  ngOnInit() {
  }

}
