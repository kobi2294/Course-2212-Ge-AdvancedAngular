import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { quizReducer } from './redux/quiz.reducer';
import { QuizFeatureKey } from './redux/quiz.state';
import { CurrentQuestionComponent } from './components/current-question/current-question.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentQuestionComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot({
        [QuizFeatureKey]: quizReducer
    }), 
    StoreDevtoolsModule.instrument({
        maxAge: 50, 
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
