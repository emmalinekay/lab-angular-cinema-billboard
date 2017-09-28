import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';

import { MoviesService } from './services/movies.service';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';

const myRoutes: Routes = [
    { path: '', component: MyHomeComponentComponent },
    { path: 'movie/:Id', component: MyMovieComponentComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MyHomeComponentComponent,
    MyMovieComponentComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    HttpModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
