import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Kpr } from '../models/kpr';
import { KprDetail } from '../models/kprdetail';
import { KprService } from '../service/kpr.service';

@Component({
  selector: 'app-detailkpr',
  templateUrl: './detailkpr.component.html',
  styleUrls: ['./detailkpr.component.css']
})
export class DetailkprComponent implements OnInit {

  @Input()
  kpr: Kpr;
  kprdetail: KprDetail

  constructor(
    private route: ActivatedRoute,
    private KprService: KprService,
    private location: Location
  ) { }

  getDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.KprService.getDetail(id)
      .subscribe(kpr => this.kpr = kpr);
  }

  getDetailKpr(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.KprService.getDetailKpr(id)
      .subscribe(kprdetail => this.kprdetail = kprdetail);
  }

  ngOnInit(): void {
    this.getDetail();
    this.getDetailKpr();
  }
  goBack(): void {
    this.location.back();
  }

}
