import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @ViewChild('v', {static: true}) public el: ElementRef;
  constructor() { }
  public valeur: string;

  changeValue() {
    this.valeur = this.el.nativeElement.value;
  }

  ngOnInit() {
  }

}
