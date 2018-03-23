import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-cat-modal',
  templateUrl: './catModal.component.html',
  styleUrls:  ['./catModal.component.scss']
})

export class CatModalComponent {

  public currentCat = '';

    constructor(
      public dialogRef: MatDialogRef<CatModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    }
}
