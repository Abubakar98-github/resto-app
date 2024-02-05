import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import {  RestoService} from '../../resto.service'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private  resto : RestoService){ }

  alert : boolean =false

  addResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  collectdata(){
    // console.warn(this.addResto.value);
    this.resto.saveResto(this.addResto.value).subscribe((result)=>{
      // console.warn(result);
  this.alert = true      
    })
    this.addResto.reset({})
  }
  closeAlert(){
    this.alert=false
  }
}
