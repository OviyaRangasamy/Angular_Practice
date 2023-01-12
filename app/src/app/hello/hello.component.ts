import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  public greeting = "";
  public colour = "" ;
  public colorData = ["red","green","blue","yellow"]
  public display : string | boolean = "";
  displayName(input: string) {
    if(input===""){
     this.display = false;
    }
    else{
    this.display = true;
    }
  }

  colorPick(inputValue:string) {
    this.colour = inputValue;
    console.log(this.colour)
    return(this.colour)
}
}