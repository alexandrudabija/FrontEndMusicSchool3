import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ReceiveOrders } from '../models/order.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http :HttpClient ) { }
  readonly  baseUrl = 'https://backend-music-school.vercel.app/Orders';
  readonly  baseUrlorders = 'https://backend-music-school.vercel.app/userOrders';
  getOrder (_id :any)
  {
  
    return this.http.get(this.baseUrl +`/${_id}`)
  
  }
  
  getOrdersEmail (idUser :String):Observable<any>
  {
  
    return this.http.get<any>(this.baseUrlorders +`/${idUser}`)
    .pipe(
//  Normalizing Data 
      map((orders:any)=>{ return this.filters(orders.data)
      })
      
      
      )
    
  
  }
  



getOrders ():Observable<any>
{

  return this.http.get<any>(this.baseUrl)

}

postData(data :any):Observable<any>
{

  return this.http.post<any>(this.baseUrl,data);
}



filters(value :any):any
{


  let k= true;
  const arrayObj=[...value];
  
  
    while(k==true)
    {
      
      k=false;
      
            for(let i=0 ,temp;i<arrayObj.length; i++ )
        {
  
  
          
           if(arrayObj[i]?.idOrder<arrayObj[i+1]?.idOrder)
           {
              temp =arrayObj[i] ;
              arrayObj[i]=arrayObj[i+1];
              arrayObj[i+1]=temp;
             
             k=true;
           }
        
              
        }	
    }
    if(k===false) {
   
    return arrayObj
    }
  

}
}
