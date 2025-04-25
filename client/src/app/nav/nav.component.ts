import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  private accountService = inject(AccountService);
  model: any = {};

  ngOnInit(): void {
    this.accountService.login(this.model);
  }

  login() {
    console.log(this.model);
  }
}
