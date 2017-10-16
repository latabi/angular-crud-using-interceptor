import { Injectable } from '@angular/core';
// import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ServicesService {
    private url = "http://localhost:5071/api/Students";
    url1 = "http://localhost:5071/api/Students/PostStudent";
    url2 = "http://localhost:5071/api/Students/PutStudent";
    url3 = "http://localhost:5071/api/Students/DeleteStudent";
    constructor(private http: HttpClient) { }


    //get method
    getAll(): Observable<any> {
        return this.http.get(this.url);
    }

    //post method
    onCreate(resource): Observable<any> {
    return this.http.post(this.url1, JSON.stringify(resource));
    }

    //update
    update(resource) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.url2 + '/' + resource.id, JSON.stringify(resource));
    }

    //delete
    delete(id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.delete(this.url3 + '/' + id);
    }

    //another update see which will work



}