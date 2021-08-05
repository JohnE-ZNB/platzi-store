import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductModel } from './../../../../core/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  /*
    Este componente va a recibir información desde otro componente en este caso desde products.component como
    un componente padre... este hace un consumo y lo que obtiene lo va a enviado a este componente para que en 
    su html se pueda mostrar
  */
  @Input() producto: ProductModel = Input();

  /*
    Este componente va a emitir un evento con "X" información a otro, en este caso desde products.component como
    un componente padre... este cada vez que se invoque el metodo addCart va a emitir la info al otro component
  */
  @Output() productoClick: EventEmitter<any> = new EventEmitter();

  addCart() {
    console.info('addCart');
    console.info('productClicked.emit - id Por Output');
    console.info(this.producto);
    /*
      Desde la variable del OUTPUT se EMITE "X" información en este caso enviamos el id. Recodemos que angular
      detecta el objeto completo sin necesidad de pasarlo desde html como variable del metodo
    */
    this.productoClick.emit(this.producto.id)
  }
  addCartTwo(desc: String) {
    console.info('addCart 2 ');
    console.info('2 productClicked.emit - id Por Output');
    console.info(this.producto);
    console.info(desc);
  }
}
