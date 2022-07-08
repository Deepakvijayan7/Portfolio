import { Component, OnInit } from '@angular/core';
import { TestimonialService } from '../testimonial.service';
import { Router } from '@angular/router';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  testimonials=[{
    name:'',
    job:'',
    image:'',
    quote:'',
    class:''
  }]
  constructor(private router:Router,private TestimonialService: TestimonialService) { }

  ngOnInit(): void {
    this.TestimonialService.getTestimonial().subscribe((data:any)=>{
      this.testimonials=JSON.parse(JSON.stringify(data));
  })
  }

}
