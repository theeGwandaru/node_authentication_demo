const assert = require('chai').assert;
const mongoose = require('mongoose');
const userService = require('../services/userService');
const User = require('../models/user');
require('../config/passport');

const numbers = [1, 2, 3, 4, 5];

// describe('An array of numbers', () => {
//   describe("making sure that it is an array", () => {
//     it("should have the length property", () => {
//       assert.isArray(numbers, "is array of numbers");
//     })
//   })
// })

before(() => {
  mongoose.connect('mongodb://localhost/node_auth_demo',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false }).then((connection) => {
      User.deleteMany({});
    });
})


describe("userService", () => {
  //   describe("userService.create test", () => {
  //     it("should return a user", (done) => {
  //       userService.create({ email: "test@domain.com", password: "password" })
  //       .then((user)=>{
  //         assert.isNotNull(user);
  //         done();
  //       });
  //     })
  //   });

  //   describe("userService.findByEmail test", ()=>{
  //     it("should return a user", (done) =>{
  //       userService.findByEmail('test@domain.com')
  //       .then((user)=>{
  //         console.log(user);
  //         assert.isNotNull(user);
  //         done();
  //       })
  //     })
  //   });

  describe("user.service.authenticate", () => {
    it("should return a user", (done) => {
      userService.authenticate({ email: 'test@domain.com', password: 'passport' })
        .then((user) => {
          console.log(user);
          assert.isNotNull(user);
          done();
        })
    });
  })
});

after(() => {
  mongoose.disconnect();
})