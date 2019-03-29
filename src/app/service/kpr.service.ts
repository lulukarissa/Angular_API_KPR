import { Injectable } from '@angular/core';

//TAMBAHAN
//Http & response yang akan digunakan untuk request ke api
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Observable class yang berisi sumber data yang nantinya akan di subscribe
import { Observable, of } from 'rxjs';
//Operator untuk mapping yang disediakan oleh rxjs
import { catchError, map, tap } from 'rxjs/operators';

//Model response
// import { FilmResponse } from '../models/film_response'
import { Kpr } from '../models/kpr'
import { KprDetail } from '../models/kprdetail'



@Injectable({
  providedIn: 'root'
})
export class KprService {

  //Inisialisasi http di constructor
  constructor(
    private http: HttpClient
  ) { }

  //link untuk get api
  private url = 'https://localhost:44320/api/SkemaKprView'  //api Kelvin
  private url2 = 'https://localhost:44320/api/kpr'          //api Lulu

  private log(message: string) {
    console.log(message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  //fungsi mengambil semua data kpr untuk di list
  getKpr() : Observable<Kpr[]> {
    return this.http.get<Kpr[]>(this.url2)
    .pipe(
      tap(_ => this.log('fetched data!')),
      catchError(this.handleError<Kpr[]>('getKpr', []))
    )
  }

  /** GET kpr by id. Return `undefined` when id not found */
  getDetailNo404<Data>(id: string): Observable<Kpr> {
    const url = `${this.url2}/?id=${id}`;
    return this.http.get<Kpr[]>(url)
      .pipe(
        map(kpr => kpr[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} kpr id=${id}`);
        }),
        catchError(this.handleError<Kpr>(`getKpr id=${id}`))
      );
  }

  //GET Kpr Detail by id and 404 if id not found
  getDetail(id: string): Observable<Kpr> {
    //api detail kpr by id
    const url = `${this.url2}/${id}`;
    return this.http.get<Kpr>(url).pipe(
      tap(_ => this.log(`fetched kpr id=${id}`)),
      catchError(this.handleError<Kpr>(`getKpr id=${id}`))
    );
  }

  //GET Kpr Detail by id and 404 if id not found
  getDetailKpr(id: string): Observable<KprDetail> {
    //api detail angsuran cicilan
    const url = `${this.url}/${id}`;
    return this.http.get<KprDetail>(url).pipe(
      tap(_ => this.log(`fetched kpr id=${id}`)),
      catchError(this.handleError<KprDetail>(`getKpr id=${id}`))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  postKpr(kpr): Observable<Kpr> {
    return this.http.post<Kpr>('https://localhost:44320/api/SkemaKprView/', kpr, this.httpOptions).pipe(
      tap(_ => this.log('succesfully posted!'),
      catchError(this.handleError<KprDetail>('postKPR'))
      )
    )
  }
}
