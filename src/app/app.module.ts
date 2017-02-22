import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { ShoppingListComponent } from '../pages/shoppingList/shoppingListComponent';

export const firebaseConfig = {
    apiKey: "AIzaSyBGwL1judZpGf1VaLR1aOjb7A45KgDQ04A",
    authDomain: "shopping-list-abfce.firebaseapp.com",
    databaseURL: "https://shopping-list-abfce.firebaseio.com",
    storageBucket: "shopping-list-abfce.appspot.com",
    messagingSenderId: "539589734155"
  };


@NgModule({
  declarations: [
    MyApp,
    ShoppingListComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingListComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
