import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any ={};

  constructor(public accountService: AccountService, private spinner: NgxSpinnerService, private router: Router) {}

  ngOnInit(): void {
  
  }

  spin() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }

  login() {
    this.spin();
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigate(['home'])
      console.log(response)
    }, error => {
      console.log(error);
    })
    
  }

  logout() {
    this.accountService.logout();
    this.spin();
    this.router.navigate([''])
  }

}
