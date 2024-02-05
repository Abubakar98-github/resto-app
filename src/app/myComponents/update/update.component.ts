import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {RestoService} from '../../resto.service'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  implements OnInit{
  editResto = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  constructor (private router : ActivatedRoute , private resto:RestoService ) {}

  ngOnInit(): void {
    const id = parseInt(this.router.snapshot.params["id"])
    // debugger
    this.resto.getCurrentResto(id).subscribe((result) =>{
      console.log('Yes', result['name']);
   
      this.editResto = new FormGroup({
        name: new FormControl(result.name),
        email: new FormControl(result.email),
        address: new FormControl(result.address)
      })
    }) 
  }

}
