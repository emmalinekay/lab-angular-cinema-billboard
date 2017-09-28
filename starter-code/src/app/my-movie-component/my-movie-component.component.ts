import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  movieInfo: any = {};

    constructor(
      private movieThang: MoviesService,
      private activatedThang: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedThang.params.subscribe(
          (myParams) => {
              const theId = Number(myParams.Id);

              this.movieInfo = this.movieThang.getMovie(theId);
              console.log(this.movieThang.getMovie(theId));
              console.log(theId);
          }
        );
    }

}
