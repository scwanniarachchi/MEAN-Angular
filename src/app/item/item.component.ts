import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import io from 'socket.io-client';

const socket = io('http://localhost:4000/');

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  image:any
  pathUrl: String=''
  public itemForm !: FormGroup;
  constructor (private formBuilder:FormBuilder,private http: HttpClient,private router:Router){}

  ngOnInit(): void {
    this.itemForm = this.formBuilder.group({
      name:[''],
      image:[''],
      price:[''],
      description:[''],
      availability:[''],
      image_url:[''],
    })
  }

  item(){
    if(this.itemForm.controls["name"].value != ''){
      if(this.itemForm.controls["description"].value != ''){
        if(this.pathUrl != ''){
          if(this.itemForm.controls["price"].value != ''){
            if(this.itemForm.controls["availability"].value != ''){
              this.itemForm.controls["image_url"].setValue(this.pathUrl)
              this.http.post<any>("http://localhost:4000/Item",this.itemForm.value).subscribe(
                res=>{
                  console.log(res)
                  alert("successful!")
                  this.itemForm.reset()
                  socket.emit('item','set data')
              },err=>{
                console.log(err)
                alert("Error!")
              })
            }else{
              alert("Availability Required!")
            }
          }else{
            alert("Price Required!")
          }
        }else{
          alert("Image Required!")
        }
      }else{
        alert("Description Required!")
      }
    }else{
      alert("Name Required!")
    }
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }

    const imageData = new FormData();
    imageData.append('file',this.image)
    this.http.post<any>("http://localhost:4000/Item/upload",imageData).subscribe(
      res=>{
        console.log(res)
        this.pathUrl=res.filename
    },err=>{
      console.log(err)
      alert("Server Error!")
    })
  }
}
