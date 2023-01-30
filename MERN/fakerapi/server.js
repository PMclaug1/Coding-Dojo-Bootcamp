// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const express = require("express")
const { faker } = require('@faker-js/faker');

const app = express()

const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
const newUser = new User();
console.log(newUser);

class Address{
  constructor(){
    this.street = faker.address.streetAddress();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
  }
}
const newAddress = new Address();

class Company {
  constructor() {
    this._id = faker.datatype.uuid();
    this.name= faker.company.name();
    this.address = newAddress;
  }
}
const newComp = new Company();
console.log(newComp);


app.get("/api/users/new", (req, res) => {
    res.send(`ID: ${newUser._id} Name: ${newUser.firstName} ${newUser.lastName} Email: ${newUser.email} Password: ${newUser.password} Phone #: ${newUser.phoneNumber}`);
})

app.get("/api/companies/new", (req, res) => {
    res.send(`Company name: ${newComp.name}, ${newComp._id}, ${newAddress.street}, ${newAddress.city}, ${newAddress.state}, ${newAddress.zipCode}, ${newAddress.country}`);
})

app.get("/api/user/company", (req, res) => {
    res.send(`User First Name: ${newUser.firstName} ${newUser.lastName} Company name: ${newComp.name}`);
})


app.listen(port, () => console.log(`Connected to ${port}`))

