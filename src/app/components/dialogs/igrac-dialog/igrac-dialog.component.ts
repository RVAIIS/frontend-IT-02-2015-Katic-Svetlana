import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDatepicker } from '@angular/material';

import { FormControl, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';
import { Nacionalnost } from '../../../models/nacionalnost';
import { Igrac } from '../../../models/igrac';
import { NacionalnostService } from '../../../services/nacionalnost.service';
import { IgracService } from '../../../services/igrac.service';
@Component({
  selector: 'app-igrac-dialog',
  templateUrl: './igrac-dialog.component.html',
  styleUrls: ['./igrac-dialog.component.css']
})
export class IgracDialogComponent implements OnInit {

  nacionalnosti: Nacionalnost[];

  flag: number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<IgracDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Igrac,
    public igracService: IgracService,
    public nacionalnostService: NacionalnostService) { }
  
  ngOnInit() {
      this.nacionalnostService.getAllNacionalnost().subscribe(nacionalnosti =>
        this.nacionalnosti = nacionalnosti
      );
  }

  public add(): void {
    this.data.id = -1;
    this.igracService.addIgrac(this.data);
    this.snackBar.open("Uspešno dodat igrač", "U redu", { duration: 2500 });
  }
 
  public update(): void {
    this.igracService.updateIgrac(this.data);
    this.snackBar.open("Uspešno modifikovan igrač", "U redu", { duration: 2500 });
  }
 
  public delete(): void {
    this.igracService.deleteIgrac(this.data.id);
    this.snackBar.open("Uspešno obrisan igrač", "U redu", { duration: 2000 });
  }
 
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustali ste", "U redu", { duration: 1000 });
  }
 
  compareTo(a, b) {
    return a.id == b.id;
  }

}
