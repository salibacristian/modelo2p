import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  array = [
    { Column1: "Row 1", Column2: "Row 1", Column3: "Row 1" },
    { Column1: "Row 2", Column2: "Row 2", Column3: "Row 2" },
    { Column1: "Row 3", Column2: "Row 3", Column3: "Row 3" },
    { Column1: "Row 4", Column2: "Row 4", Column3: "Row 4" },
    { Column1: "Row 5", Column2: "Row 5", Column3: "Row 5" },
    { Column1: "Row 6", Column2: "Row 6", Column3: "Row 6" }
  ];

  getTable(){

    return document.getElementById('contentToConvert');
  }

}
