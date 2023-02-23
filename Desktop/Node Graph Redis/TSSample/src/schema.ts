import { makeExecutableSchema } from "graphql-tools";
import { ServiceTypeDefs } from "./service/serviceSchema";
import ServiceResolvers from "./service/serviceResolver";

// const { makeExecutableSchema } = require("@graphql-tools/schema");
// const { ServiceTypeDefs } = require("./service/serviceSchema");
// const ServiceResolvers = require("./service/serviceResolver");
export const schema = makeExecutableSchema({
  typeDefs: ServiceTypeDefs,
  resolvers: ServiceResolvers,
});
