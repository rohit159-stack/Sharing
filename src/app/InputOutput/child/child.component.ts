import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

@Input() myinput:string;
@Output() myoutput:EventEmitter<string>= new EventEmitter();
data1:string;
  constructor() { }

  ngOnInit() {

    console.log(this.myinput);
  }
SendData(){
  alert(this.data1)
  this.myoutput.emit(this.data1);
}
}
