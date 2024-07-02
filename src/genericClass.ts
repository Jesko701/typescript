interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction<T extends number, U extends Database>(
  valOne: T,
  valTwo: U
): object {
  return {
    valOne,
    valTwo,
  };
}
/* 
anotherFunction(3, {
  connection: "testing",
  username: "testingUsername",
  password: "testingDatabase",
}); 
*/

// *
interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}
