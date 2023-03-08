import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  propertyId!: Number;
  constructor(private route:ActivatedRoute,private router:Router) {
    this.propertyId=this.route.snapshot.params['id']
   }

  ngOnInit(): void {
  }
  onBack(){
this.router.navigate(['/'])
  }
}
