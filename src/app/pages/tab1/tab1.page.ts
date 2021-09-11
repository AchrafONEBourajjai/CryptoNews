import { Component, OnInit, ViewChild } from '@angular/core';
import { VideosService } from 'src/app/videos.service';
import { IonSegment } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  @ViewChild(IonSegment) segment : IonSegment;
  constructor(private coinservice :VideosService) { }
  ngOnInit() {
  }
  segmentChangedt( event ){
    const valorSegement = event.detail.value;
    console.log(valorSegement);
  }
}
