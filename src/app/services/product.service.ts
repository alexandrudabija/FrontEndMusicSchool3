import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Products } from '../models/product.model';
import { ReceiveUser } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http :HttpClient) { }

readonly  baseUrl= 'https://backend-music-school.vercel.app/products';

getProducts():Observable<Products[]>
{

return this.http.get<Products[]>(this.baseUrl)

}



}
