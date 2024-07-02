"use strict";
/*
class User {
  public email: string;
  private name: string;
  private readonly city: string = "Tokyo";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    this.city = "";
  }
} */
// * code is same as above
class User {
    constructor(email, name // private userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Tokyo";
        this.email = email;
        this.name = name;
        // this.userId = userId
        this.city = "";
    }
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const john = new User("john@gmail.com", "john");
// john.city = "Tokyo";
// john.deleteToken()
