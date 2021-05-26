import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blogger } from '../blogger';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}
  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/bloggers');
  }

  insertData(data: Blogger) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addBlogger', data);
  }

  deleteData(id: string | Blogger) {
    return this.httpClient.delete(
      'http://127.0.0.1:8000/api/deleteBlogger/' + id
    );
  }

  getBloggerById(id: string) {
    return this.httpClient.get('http://127.0.0.1:8000/api/bloggers/' + id);
  }

  updateData(id: string, data: Blogger) {
    return this.httpClient.put(
      'http://127.0.0.1:8000/api/updateBlogger/' + id,
      data
    );
  }
}
