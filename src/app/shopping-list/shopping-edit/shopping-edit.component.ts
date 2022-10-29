import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef!: ElementRef;
 @ViewChild('amountInput') amountInputRef!: ElementRef;
 @Output()ingredientAdded = new EventEmitter<Ingredient>();
 @Output()ingredientDeleted = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
    this.onClearItem();
  }
  onDeleteItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const deleteIngredient = new Ingredient(ingName, 0);
    this.ingredientDeleted.emit(deleteIngredient);
    this.onClearItem();
  }
  onClearItem(){
    this.nameInputRef.nativeElement.value = "";
    this.amountInputRef.nativeElement.value = "";
  }
}
