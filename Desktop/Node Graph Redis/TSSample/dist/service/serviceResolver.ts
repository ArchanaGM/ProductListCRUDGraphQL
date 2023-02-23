//import { ApolloError, gql } from "apollo-server-express";
const { ApolloError } = require("apollo-server-express");
const ProductModel = require("../models/productSchema");

const { default: mongoose } = require("mongoose");
const db_url = "mongodb://localhost:27017/products";
const connect = async () => {
  await mongoose.connect(db_url, { useNewUrlParser: true });
};

const ServiceResolvers = {
  Query: {
    getProductsList: async (parent: any, args: any) => {
      await connect();
      const result = ProductModel.find({}).then((res: any) => {
        if (res) {
          return res;
        }
      });
      return result;
    },
    getProduct: async (parent: any, args: any) => {
      await connect();
      const result = ProductModel.findById(args.id).then((res: any) => {
        if (res) {
          return res;
        }
      });
      return result;
    },
  },
  Mutation: {
    updateProduct: async (parent: any, args: any) => {
      await connect();
      const result = ProductModel.findByIdAndUpdate(
        args.id,
        {
          productName: args.productName,
          category: args.category,
          price: args.price,
          imgPath: args.imgPath,
          colors: args.colors,
        },
        { new: true }
      ).then((res: any) => {
        if (res) {
          return res;
        }
      });
      return result;
    },
    addProduct: async (parent: any, args: any) => {
      await connect();
      let product = new ProductModel({
        productName: args.productName,
        category: args.category,
        price: args.price,
        imgPath: args.imgPath,
        colors: args.colors,
      });
      const result = product.save().then((res: any) => {
        return res;
      });
      return result;
      // const result = ProductModel.insertMany([
      //     {
      //         productName: args.productName,
      //         category: args.category,
      //         price: args.price,
      //         imgPath: args.imgPath,
      //         colors: args.colors
      //     }
      // ]).then((res) => {
      //     if (res) {
      //         return res;
      //     }
      // })
      // return result;
    },
    deleteProduct: async (parent: any, args: any) => {
      try {
        await connect();
        await ProductModel.findOneAndRemove({ _id: args.id });
        return true;
      } catch (error) {
        console.log("Error while delete:", error);
        return false;
      }
    },
  },
  // Query: {
  //   getAllUsers: async (_: any, args: any) => {
  //     try {
  //       const mockUsers = [{ name: "xyz" }, { name: "abc" }];
  //       return mockUsers;
  //     } catch (error) {
  //       // throw new ApolloError(error);
  //       console.log("error", error);
  //     }
  //   },
  // },
};

export default ServiceResolvers;
