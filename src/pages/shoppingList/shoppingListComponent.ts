import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'shopping-list',
  templateUrl: 'shoppingListComponent.html'
})
export class ShoppingListComponent
{
  public shoppingLists:         FirebaseListObservable<any[]>
  public newShoppingListTitle:  string;
  public newShoppingListItem:   string;

  constructor(public navCtrl: NavController, af: AngularFire)
  {
    this.shoppingLists        = af.database.list('/shoppingLists');
    this.newShoppingListTitle = "";
    this.newShoppingListItem  = "";
  }

  /** ******************** Shopping list crud ******************** **/

  public createShoppingList()
  {
    if (this.newShoppingListTitle.length > 0) {
      let newShoppingList = {
        title: this.newShoppingListTitle,
        items: []
      }

      this.shoppingLists.push(newShoppingList);
      this.newShoppingListTitle = "";

    } else {
      alert("Your shopping list must have a name!");
    }
  }

  public updateShoppingList(shoppingList)
  {
    this.shoppingLists.update(shoppingList.$key, {
      title: shoppingList.title,
      items: shoppingList.items
    });
  }

  public deleteShoppingList(shoppingList)
  {
    this.shoppingLists.remove(shoppingList);
  }
  
}
