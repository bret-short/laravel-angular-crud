import { Component, OnInit } from '@angular/core';
import { Blogger } from 'src/app/blogger';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-bloggers',
  templateUrl: './bloggers.component.html',
  styleUrls: ['./bloggers.component.css'],
})
export class BloggersComponent implements OnInit {
  bloggers: any;
  blogger = new Blogger();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getBloggersData();
  }

  getBloggersData() {
    this.dataService.getData().subscribe((res) => {
      this.bloggers = res;
    });
  }

  insertData() {
    this.dataService.insertData(this.blogger).subscribe((res) => {
      this.getBloggersData();
    });
  }

  deleteData(id: any) {
    this.dataService.deleteData(id).subscribe((res) => {
      this.getBloggersData();
    });
  }
}
