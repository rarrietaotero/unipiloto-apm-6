import {InMemoryDbService} from "angular2-in-memory-web-api";
import {Product} from "../models/product";
import {Customer} from "../models/customer";
import {LineItem} from "../models/line-item";
import {SalesInvoice} from "../models/sales-invoice";


export class InMemoryDatosService implements InMemoryDbService {
  createDb() {
    let products: Array<Product> = [
      {
        id: 1,
        name: "Samsung galaxy 8",
      },
      {
        id: 2,
        name: "Samsung galaxy 10",
      },
      {
        id: 3,
        name: "Samsung galaxy 20",
      }
    ];

    
    let customers: Array<Customer> = [
      {
        id: 1,
        name: "Alejandro Romero"
      },
      {
        id: 2,
        name: "Pedro Chin"
      },
      {
        id: 3,
        name: "Jaime Meluq"
      }
    ];

    
    let line_items: Array<LineItem> = [
      {
        id: 1,
        productId: Product[0].id,
        purchasePrice: 250000
      },
      {
        id: 2,
        productId: Product[1].id,
        purchasePrice: 255000
      },
      {
        id: 3,
        productId: Product[2].id,
        purchasePrice: 120000
      }
    ];

   
   let sales_invoices: Array<SalesInvoice> = [
      {
        id: 1,
        customer: Customer[0],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: Product[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 2,
        customer: Customer[0],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: Product[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: Product[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 20,
        customer: Customer[0],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: Product[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    },
    {
        id: 19,
        customer: Customer[0],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: Product[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 22,
        customer: Customer[0],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: Product[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: Product[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 200,
        customer: Customer[1],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: Product[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    },
    {
        id: 17,
        customer: Customer[2],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: Product[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 29,
        customer: Customer[0],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: Product[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: Product[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 20,
        customer: Customer[1],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: Product[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    },
    {
        id: 41,
        customer: Customer[1],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: Product[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 62,
        customer: Customer[2],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: Product[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: Product[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 220,
        customer: Customer[0],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: Product[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    },
    {
        id: 123,
        customer: Customer[1],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: Product[1].id,
                purchasePrice: 250000
            }
        ],
        invoiceAmount: 10000,
        tax: 16
    },
    {
        id: 223,
        customer: Customer[0],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 2,
                productId: Product[1].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: Product[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount: 3434334,
        tax: 16
    },
    {
        id: 2016,
        customer: Customer[2],
        lineItems: [
            {
                id: 1,
                productId: Product[0].id,
                purchasePrice: 250000
            },
            {
                id: 3,
                productId: Product[2].id,
                purchasePrice: 120000
            }
        ],
        invoiceAmount:121213,
        tax: 16
    }
    ];

    return {products, customers, line_items, sales_invoices};
  }

}


