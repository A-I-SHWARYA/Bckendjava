import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewalltrains',
  templateUrl: './viewalltrains.component.html',
  styleUrls: ['./viewalltrains.component.css']
})
export class ViewalltrainsComponent implements OnInit {

  constructor() { }
  name="Aishwarya"
  status:boolean=false
  read=()=>{
    this.name="Raju"
    this.status=true

  }

  ngOnInit(): void {
  }

}
