import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Blogger } from 'src/app/blogger';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogger-edit',
  templateUrl: './blogger-edit.component.html',
  styleUrls: ['./blogger-edit.component.css'],
})
export class BloggerEditComponent implements OnInit {
  id: any;
  data: any;
  blogger = new Blogger();
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData() {
    this.dataService.getBloggerById(this.id).subscribe((res) => {
      // console.log(res);
      this.data = res;
      this.blogger = this.data;
    });
  }

  updateBlogger() {
    this.dataService.updateData(this.id, this.blogger).subscribe((res) => {
      this.router.navigate(['/']);
    });
  }
}
