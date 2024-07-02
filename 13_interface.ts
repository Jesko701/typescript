interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   2 Way Approches
  startTrail: () => string; // * method
  startTrailing(): string; // * method
  getCoupon(couponname: string, value: number): number;
}

interface User {
  githubToken?: string;
}

// * Inheritance all the properties from the User Interface
interface Admin extends User {
  role: "Admin" | "Ta" | "Learner";
}

const john: Admin = {
  dbId: 22,
  email: "john@h.com",
  userId: 2211,
  githubToken: "github",
  role: "Admin",
  startTrail: () => {
    return "trail start";
  },
  startTrailing() {
    return "john";
  },
  //   * compulsory parameter
  getCoupon: (name: "john", off: 2) => {
    return 10;
  },
};
john.email = "jesk@gmail.com";
// john.dbId = 33 Error because only Readonly mode
