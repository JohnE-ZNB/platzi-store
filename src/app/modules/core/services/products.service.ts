import { Injectable } from '@angular/core';
//Nos permite usar un cliente de modulo que esta importado en app.module.ts
import { HttpClient } from '@angular/common/http'

//Importamos el modelo porque toca TIPAR la respuesta del servicio y porque pasa eso? mira getProductsAll()
import { ProductModel } from './../models/product.model'

//Importamos el archivo para manejo de variables de ambiente
import { environment } from './../../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    //Inyectamos una dependencia para usar el cliente http
    private http: HttpClient
  ) {}
  

  getAllProducts() {
    //Resulta que la petición devuelve un object y los productos son tipo array de PRODUCT (productModel)
    //Entons cuando producto consume el servicio su respuesta y lo que espera no hace match y como se resuelve
    //todo <ProductModel[]>
    return this.http.get<ProductModel[]>(`${environment.url_api}/products`);
  }

  getProduct(id: string) {
    return this.http.get<ProductModel>(`${environment.url_api}/products/${id}`);
  }
}
