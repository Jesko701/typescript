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
  protected _courseCount = 1;
  private readonly city: string = "Tokyo";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {
    this.email = email;
    this.name = name;
    // this.userId = userId
    this.city = "";
  }

  private deleteToken() {
    console.log("Token Deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const john = new User("john@gmail.com", "john");
// john.city = "Tokyo";
// john.deleteToken()
