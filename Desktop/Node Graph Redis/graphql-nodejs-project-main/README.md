# graphql-nodejs-project

A Simple Nodejs CRUD project with Graphql and MongoDB
Commands

# npm init

# npm install apollo-server apollo-server-express mongoose nodemon

apollo-server is used to create a graphQL server
apollo-server-express is used to integrate graphQL with express app
mongoose is MongoDB object modelling tool to interact with MongoDB

# npm install graphql --save

to save it as a dependency

# npm start

Create a database "product" and collection "productList" in mongo DB with below mentioned json
<!-- {
  "_id": {
    "$oid": "63ef2b0a3032c355b05306f3"
  },
  "productType": "electronics",
  "category": "Gadgets",
  "productName": "laptop",
  "price": 20000,
  "colors": [
    "black",
    "grey"
  ],
  "imgPath": "/laptop"
} -->

to add docker create -> docker-compose.yml
# docker-compose up --build -d --remove-orphan