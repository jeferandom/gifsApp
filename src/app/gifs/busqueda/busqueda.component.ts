import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;//@note ! not Null Assertion Operator

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    console.log('valor', valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
