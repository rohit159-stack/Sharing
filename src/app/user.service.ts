import { Injectable } from '@angular/core';
import { Sharing } from './model/sharing';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  share:Sharing=new Sharing();
   dataList:any[]=[];
senddata(){
  return this.dataList;
}

getdata(a){
this.dataList.push(a);
console.log(this.dataList);
}

  constructor() { }
}
