import { Component, OnInit } from '@angular/core';
import  'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  pagePhoto: any = {hits: [
          {tags: 'toto', previewURL: ''}
        , {tags: 'titi', previewURL: ''}
      ]};

  constructor() {
  }

  ngOnInit() {
  }

   onSearch(data) {
       console.log(data);
/*
https://www.youtube.com/watch?v=pGDOvVYozEc&index=6&list=PLxr551TUsmApkhhzmpn6lVyRGjAC1URrO
        34min....47min
*/
       /*
       this.http.get("https://pixabay.com/api/?key=8212369-80e62cc6a0b71acc32546fc50&q=" + data.motcle + "&page=1&per_page=3")
           .map(resp => {resp.json(); } )
           .subscribe(data => {
             console.log(data)
             this.pagePhoto = data;

           })
       */
    }

}
