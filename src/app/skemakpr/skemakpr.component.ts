import { Component, OnInit } from '@angular/core';
import { Kpr } from '../models/kpr';
import { KprService } from '../service/kpr.service';

@Component({
  selector: 'app-skemakpr',
  templateUrl: './skemakpr.component.html',
  styleUrls: ['./skemakpr.component.css'],
  providers: [KprService]
  //untuk bisa menjalankan filmservice, harus masukkan ke dalam providers di component
})
export class SkemakprComponent implements OnInit {

  //deklarasi variabel kpr
  kpr: Kpr[];

  constructor(
    private service: KprService
  ) { }

  getKpr() : void{
    //menjalankan service
    this.service.getKpr()
    .subscribe(kpr => this.kpr = kpr)
  }

  ngOnInit() {
    this.getKpr()
  }
}
