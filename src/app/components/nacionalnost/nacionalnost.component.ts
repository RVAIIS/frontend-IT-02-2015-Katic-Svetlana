import { Component, OnInit, ViewChild } from '@angular/core';
import { NacionalnostService } from '../../services/nacionalnost.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Nacionalnost } from '../../models/nacionalnost';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { NacionalnostDialogComponent } from '../dialogs/nacionalnost-dialog/nacionalnost-dialog.component';


@Component({
  selector: 'app-nacionalnost',
  templateUrl: './nacionalnost.component.html',
  styleUrls: ['./nacionalnost.component.css']
})
export class NacionalnostComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'skracenica', 'actions'];
  exampleDatabase : NacionalnostService;
  dataSource: MatTableDataSource<Nacionalnost>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public nacionalnostService: NacionalnostService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.nacionalnostService.getAllNacionalnost().subscribe(data =>{
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

  public openDialog(flag: number, id:number, naziv:string, skracenica: string) {
    const dialogRef = this.dialog.open(NacionalnostDialogComponent, {data: {id: id, naziv: naziv, skracenica: skracenica}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if(result == 1) {
        this.loadData();
      }
    });
  }

}
