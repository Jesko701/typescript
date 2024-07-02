type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditcardDetails?: number;
};

let myUser: User = {
  _id: "1234",
  name: "t",
  email: "t@t.com",
  isActive: true,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
    cardDate: string
}

// ! merge the detail of the object (not a good practice)
type cardDetail = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "h@gmail.com";
