import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor() {}
  products = [
    {
      name: 'Iphone 3',
      description:
        
        ' El iPhone 3GS marcó un cambio importante en la potencia del teléfono, al incluir un procesador ARM Cortex A8, con lo que aumentó su eficacia a los 600 MHz y a una memoria RAM de 256 MB. Con este terminal, Apple prácticamente dobló las posibilidades del modelo anterior, evolución que luego iría aplicando en los nuevos lanzamientos.'
    },
    {
      name: 'Iphone 4',
      description:
        'Como ha especificado Apple, la versión del teléfono en color blanco daba problemas con el funcionamiento normal del teléfono, lo que retrasó su salida al mercado. En España, el iPhone 4 blanco se lanzó a través de la tienda Apple el 28 de abril de 2011.1​'
    },
    {
      name: 'Iphone 5',
      description: '' /* En caso de no haber descripción el ngIf del div no muestra esta sección. */
        
    }
  ];

  ngOnInit(): void {}

  // products = products;

  share(event) {
    window.alert('The product has been shared!');
    console.log(event);
  }
}
