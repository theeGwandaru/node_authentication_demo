const assert = require('chai').assert;
const mongoose = require('mongoose');
const userService = require('../services/userService');
const User = require('../models/user');

const numbers = [1, 2, 3, 4, 5];

// describe('An array of numbers', () => {
//   describe("making sure that it is an array", () => {
//     it("should have the length property", () => {
//       assert.isArray(numbers, "is array of numbers");
//     })
//   })
// })

before(()=>{
  mongoose.connect('mongodb://localhost/node_auth_demo', 
  {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false}).then((connection)=>{
    User.deleteMany({});
  });
})


describe("userService", () => {
  describe("userService.create test", () => {
    it("should return a user", (done) => {
      userService.create({ email: "test@domain.com", password: "password" })
      .then((user)=>{
        assert.isNotNull(user);
        mongoose.disconnect();
        done();
      });
    })
  })
})