class User {
  constructor(f, l, a) {
    this.firstName = f;
    this.lastName = l;
    this.age = a;
  }

  fullName(){
    return this.firstName + " " + this.lastName;
  }
}

class SuperUser extends User {
  constructor(f, l, a, r){
    super(f, l, a);
    this.role = r;
  }
  fullName(){
    return super.fullName() + " | role: " + this.role;
  }
}

let user1 = new SuperUser("Vasiliy", "Pupkin", 30, "admin");
print(user1.fullName());
