class Person{
    constructor(fname, lname, age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    getFullName(){
        return this.fname + " " + this.lname;
    }
}

const allPerson = new Person('Pooja','Kumbar', 23);
console.log('First name', allPerson.fname);
console.log("Last name", allPerson.lname);
console.log("Age", allPerson.age);

const fullName = Person.getFullName();
console.log("fullName",fullName);