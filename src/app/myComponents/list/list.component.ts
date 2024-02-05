import { Component, OnInit } from '@angular/core';
import { RestoService } from '../../resto.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  constructor(private resto : RestoService){ }

  collection = [];

  ngOnInit(): void {
    this.resto.getList().subscribe((result:any)=>{
      console.warn(result);
    this.collection = result
    })         
  }

  deleteResto(index : number) {
    debugger
    var newArray = this.collection.filter((e)=>{ return e.id !=index});
   this.collection = newArray
  } 

}