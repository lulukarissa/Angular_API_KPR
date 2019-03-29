import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'

import { Kpr } from '../models/kpr';
import { KprService } from '../service/kpr.service';

@Component({
  selector: 'app-formkpr',
  templateUrl: './formkpr.component.html',
  styleUrls: ['./formkpr.component.css']
})
export class FormkprComponent implements OnInit {

  kprForm: FormGroup;
  submitted = false;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private service: KprService,
    private router: Router
    ) { }

  ngOnInit() {
    this.kprForm = this.formBuilder.group({
      harga: ['', Validators.required],
      dp: ['', Validators.required],
      // nominaldp: ['', Validators.required],
      bunga: ['', Validators.required],
      tenor: ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.kprForm.controls; }

  calculate() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.kprForm.invalid) {
      console.log('error!')
      return;
    }

    else {
      this.service.postKpr(this.kprForm.value)
        .subscribe((x)=>{
          console.log(x)
          this.router.navigate([`/detailkpr/${x.idskema}`])
          // window.location.href = '/skemakpr'
        });
    }
  }

}
