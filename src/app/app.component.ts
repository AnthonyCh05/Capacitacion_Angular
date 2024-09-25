import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: "../styles.css"
})
export class AppComponent implements OnInit{
  public title: string = 'Hola Mundo';

  ngOnInit(): void {
    initFlowbite();
  }

}
