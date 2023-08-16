import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'table-filter';

  searchText: string = '';

  datalist :any[] = [
    {id:1,fname:'aravindhan',lname:'p',email:'aravin@gamil.com',pnumber:8220523783},
    {id:2,fname:'mohan',lname:'m',email:'mohan@gamil.com',pnumber:8987456216},
    {id:3,fname:'sabri',lname:'s',email:'sabri@gamil.com',pnumber:9320567854},
    {id:4,fname:'meera',lname:'p',email:'meera@gamil.com',pnumber:5620523778},
    {id:5,fname:'priya',lname:'J',email:'priya@gamil.com',pnumber:9597634971},
    {id:6,fname:'jai',lname:'s',email:'jai@gamil.com',pnumber:9894393422},
    {id:7,fname:'mari',lname:'t',email:'mari@gamil.com',pnumber:9743297534},
    {id:8,fname:'abi',lname:'D',email:'abi@gamil.com',pnumber:8456954578},
    {id:9,fname:'arun',lname:'F',email:'arun@gamil.com',pnumber:7421086537},
    {id:10,fname:'pasupathi',lname:'d',email:'pasu@gamil.com',pnumber:97642976437},
  ];

  get filteredData() {
    return this.datalist.filter(data =>
      this.searchText === '' ||  // Show all data if search text is empty
      Object.values(data).some(
        value =>
          typeof value === 'string'
          ? (value as string).toLowerCase().includes(this.searchText.toLowerCase())
          : (value as number).toString().includes(this.searchText)
      )
    );
  }

}
