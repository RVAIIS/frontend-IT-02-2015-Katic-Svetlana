import { Component, OnInit, ViewChild } from '@angular/core';
import { LigaService } from '../../services/liga.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Liga } from '../../models/liga';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LigaDialogComponent } from '../dialogs/liga-dialog/liga-dialog.component';


@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'actions'];
  exampleDatabase : LigaService;
  dataSource: MatTableDataSource<Liga>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public ligaService: LigaService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.ligaService.getAllLiga().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

      this.dataSource.sortingDataAccessor = (data, property) => {
        switch(property) {
          case 'id': return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  public openDialog(flag: number, id:number, naziv:string, oznaka: string) {
    const dialogRef = this.dialog.open(LigaDialogComponent, {data: {id: id, naziv: naziv, oznaka: oznaka}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }

}
