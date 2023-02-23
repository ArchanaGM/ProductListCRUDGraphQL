// import express from "express";
// import { ApolloServer } from "apollo-server-express";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";

import { createServer } from "http";
import compression from "compression";
import cors from "cors";
// import helmet from "helmet";
import { schema } from "./schema";

// const express = require("express");
// const { ApolloServer } = require("apollo-server-express");

// const compression = require("compression");
// const cors = require("cors");
// const { createServer } = require("http");
// const { schema } = require("./schema");

const PORT = process.env.PORT || 3000;
const app = express();
app.use("*", cors());
// app.use(helmet());
// app.use(compression());
// const server = new ApolloServer({
//   schema,
// });

// server.applyMiddleware({ app, path: "/graphql" });
// const httpServer = createServer(app);
// httpServer.listen({ port: PORT }, (): void =>
//   console.log(`🚀GraphQL-Server is running on http://localhost:3000/graphql`)
// );

// server
//   .listen({ port: PORT })
//   .then(() => console.log(`Server running at ${PORT}`));

const main = async () => {
  const apolloServer = new ApolloServer({
    schema,
  });

  await apolloServer.start(); // wait
  const app: Express = express();

  apolloServer.applyMiddleware({ app }); // pass express to the apollo server

  app.get("/", (_req, res) => res.send("hello world"));
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

main().catch((err) => console.error(err));
