import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; /*https://yakovfain.com/2015/11/11/angular-2-passing-data-to-routes/*/
import { HttpClient } from '@angular/common/http';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})

@Injectable() /*https://embed.plnkr.co/KNq5fC/*/
export class HeroListComponent implements OnInit {

    static _heros: any = [];
    titre: string;

    private apiUrl = 'http://localhost:4001/api/v1/users';
    public data:any = [];
    xJ: string = '';


    constructor(route: ActivatedRoute, private http: HttpClient) {
        this.titre = route.snapshot.data.title + ' / ';
        /*this.productID = route.snapshot.params['id']; // 3*/
        /*this.heros.push(new Hero(1, 'Red', 'SFR', 'Chuck Overstreet'));
        this.heros.push(new Hero(2, 'Green', 'Lantern', 'Chuck Overstreet'));*/
    }

    ngOnInit() {
    }

    get heros() {
        return HeroListComponent._heros;
    }

    public videListe = () => {
      HeroListComponent._heros = [];
      // alert(HeroListComponent._heros.length);
    };

    // https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
    // https://medium.com/craft-academy/connecting-an-api-to-an-angular-4-front-end-application-e0fc9ea33202
    // https://medium.com/netscape/the-better-way-to-write-api-service-in-angular-4-c9178ecf7f48
    getData(){
        
        return this.http.get<any>(this.apiUrl).map((res: Response)=> res.json())
    }

    public getContact(){
        //return JSON.stringify({"status": 200, "error": null, "response": "[{'name':'brown', 'alterEgo': 'James', 'power':'super power')}]"});
        //return {"status": 200, "error": null, "response": [{"name":"brown", "alterEgo": "James", "power":"super power"}]};


        //console.log("1-->");
        /*return this.getData().subscribe(data =>{
            //console.log(data);
            console.log("2-->");
            // this.heros.push(new Hero(3, data.response[0].name, data.response[0].power, data.response[0].alterEgo));
                //this.data = data;
        }*/
        this.http.get<any>(this.apiUrl)
            .subscribe(data => {
                console.log("2-->");
                data.response.forEach( item => {
                    this.heros.push(new Hero(item.id, item.nom, item.age, item.prenom));
                });


                //this.data = data;

                /*,err => {
                       console.log("Error occured");
                   }*/
            });
    }

}
