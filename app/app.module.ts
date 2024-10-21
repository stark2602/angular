import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { EventCardsComponent } from './event-cards/event-cards.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ImageVisibilityDirective } from './directives/image-visibility.directive';
import { TrendingComponent } from './trending/trending.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { ExploreEventComponent } from './explore-event/explore-event.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { EventByCityComponent } from './event-by-city/event-by-city.component';
import { EventPageComponent } from './event-page/event-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    EventCardsComponent,
    SearchBarComponent,
    FooterComponent,
    ImageVisibilityDirective,
    TrendingComponent,
    SpotlightComponent,
    ExploreEventComponent,
    MostPopularComponent,
    EventByCityComponent,
    EventPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
