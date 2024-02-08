import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

  todos:Todo[]=[];
  constructor(){
    this.todos = [
      {
      sno:1,
      title:"this is my title1",
      desc:"t1",
      active:true
    },
    {
      sno:2,
      title:"this is my title2",
      desc:"t2",
      active:true
    },
    {
      sno:3,
      title:"this is my title3",
      desc:"t3",
      active:true
    }]
  }
  ngOnInit(): void {
    
  }

}
