import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse } from '@angular/common/http';
import { response } from 'express';
@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
private _getUrl="/testimonial"
  constructor(private http:HttpClient) { }
//   getTestimonial(){
//     return this.http.get("/testimonial");
//   }
  getTestimonial(){
    return this.http.get("http://localhost:8080/testimonial");
  }
}
