import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas';

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

  public captureScreen() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      // Few necessary setting options  
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });
  }

}
