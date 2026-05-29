const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    } else {
      return 'Meal must be a string';
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      this._price = priceToCheck;
    } else {
      return 'Price must be a number';
    }
  },
  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today's special is ${this._meal} for \$${this._price}!`;
    } else {
      return 'Meal or price was not set correctly!';
    }
  }
};

menu.meal = 'Lasagna';
menu.price = 10;
console.log(menu.todaysSpecial);
