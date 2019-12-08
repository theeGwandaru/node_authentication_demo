# node_authentication_demo

This is learning template on api authentication with passport.js.
The following skills are demonstrated

* REST API development with [Express.js]()
* [MongoDB](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/) database integration
* Authentication with [Passport.js](http://www.passportjs.org/)
* Json Web Tokens with [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) and [express-jwt](https://www.npmjs.com/package/express-jwt)
* Logging with [Watson.js](https://www.npmjs.com/package/watson)

## Installation

Use the package manager [npm install](https://docs.npmjs.com/cli/install) to install.

```bash
npm install
```

## Running

```bash
npm start
```

## Routes
http://localhost:3000/users/login : POST: Body {"email": "test@domain.com","password": "password"}

http://localhost:3000/users  : GET: Get all users: Token required


## License
[MIT](https://choosealicense.com/licenses/mit/)