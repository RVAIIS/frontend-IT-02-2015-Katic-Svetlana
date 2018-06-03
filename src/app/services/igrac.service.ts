import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Igrac } from '../models/igrac';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class IgracService {
    igracService: IgracService;

    private readonly API_URL = 'http://localhost:8083/igrac/';
    private readonly API_URL_BYID = 'http://localhost:8083/igracZaTim/';

    dataChange: BehaviorSubject<Igrac[]>=new BehaviorSubject<Igrac[]>([]);
    constructor(private httpClient: HttpClient) { }

    public getIgraci(): Observable<Igrac[]> {
        this.httpClient.get<Igrac[]>(this.API_URL).subscribe(data => {
          this.dataChange.next(data);
        },
          (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
          });
        return this.dataChange.asObservable();
      }
      
       public getIgraciZaTim(idIgrac): Observable<Igrac[]> {
         this.httpClient.get<Igrac[]>(this.API_URL_BYID + idIgrac).subscribe(data => {
           this.dataChange.next(data);
         },
           (error: HttpErrorResponse) => {
             console.log(error.name + ' ' + error.message);
           });
         return this.dataChange.asObservable();
       }

       public addIgrac(igrac: Igrac): void {
        this.httpClient.post(this.API_URL, igrac).subscribe();
      }
     
      public updateIgrac(igrac: Igrac): void {
        this.httpClient.put(this.API_URL, igrac).subscribe();
      }
     
      public deleteIgrac(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
      }



}