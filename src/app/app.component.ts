import { Component } from '@angular/core';
import { DatosService } from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplomean';
  jsonData: any;

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.datosService.getData().subscribe(data => {
      this.jsonData = data;
    });
  }
}
