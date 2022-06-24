import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-error',
  templateUrl: './pais-error.component.html'
})
export class PaisErrorComponent {

  @Input() termino!: string;
  @Input() hayError!: boolean;
}
