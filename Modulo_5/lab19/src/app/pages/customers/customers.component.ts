import { Component, OnInit } from '@angular/core';
import {Customer} from "../../models/customer";
import {CustomersService} from "../../services/customers.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title: string = 'Clientes';
  customers: Customer[];

  constructor(private customersService: CustomersService){}

  getCustomers() {
    this.customersService.getCustomers().subscribe(customers => {this.customers = customers;
       },

        error => {
          console.log(error);
        }
      );
   }

  ngOnInit(){
    this.getCustomers();
  }

}
