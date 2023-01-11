import { Component } from '@angular/core';
//
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductAddComponent } from './Product/product-add/product-add.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nameUser = 'Nguyen The Nam';

  constructor(private dialog: MatDialog ){}

  openDialogAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus=true
    dialogConfig.width = "50%"
    const dialogRef = this.dialog.open(ProductAddComponent,dialogConfig)

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
