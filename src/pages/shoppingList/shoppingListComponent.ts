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
  public newShoppingList:       any;
  public newItem:               any;

  constructor(public navCtrl: NavController, af: AngularFire)
  {
    this.shoppingLists        = af.database.list('/shoppingLists');
    this.newShoppingList      = { title: "", items: [] };
    this.newItem              = { name: "", quantity: "" };
  }


  public storeTempShoppingListItem()
  {
    this.newShoppingList.items.push(this.newItem);
    this.newItem = { name: "", quantity: ""};
  }

  public resetShoppingList()
  {
    this.newShoppingList = { title: "", items: [] };
    this.newItem         = { name: "", quantity: "" };
  }

  public deleteShoppingListItem(list, listItem)
  {
    delete list[listItem];
    this.shoppingLists.update(list.$key, list);
  }

  /** ******************** Shopping list crud ******************** **/

  public createShoppingList()
  {
    if (this.newShoppingList.title.length > 0) {
      let newShoppingList = {
        title: this.newShoppingList.title,
        items: this.newShoppingList.items
      }

      this.shoppingLists.push(newShoppingList);
      this.resetShoppingList();

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
