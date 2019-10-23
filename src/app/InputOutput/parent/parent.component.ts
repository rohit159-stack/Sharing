import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

data:string="hi rohit sahu";
abc:string;

  constructor() { 
    
  }

  ngOnInit() {
  }
GetData(value){
this.abc=value;

}
}
