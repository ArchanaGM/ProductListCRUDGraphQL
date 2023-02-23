"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { ApolloError } = require("apollo-server-express");
const ProductModel = require("../models/productSchema");
const { default: mongoose } = require("mongoose");
const db_url = "mongodb://localhost:27017/products";
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose.connect(db_url, { useNewUrlParser: true });
});
const ServiceResolvers = {
    Query: {
        getProductsList: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield connect();
            const result = ProductModel.find({}).then((res) => {
                if (res) {
                    return res;
                }
            });
            return result;
        }),
        getProduct: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield connect();
            const result = ProductModel.findById(args.id).then((res) => {
                if (res) {
                    return res;
                }
            });
            return result;
        }),
    },
    Mutation: {
        updateProduct: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield connect();
            const result = ProductModel.findByIdAndUpdate(args.id, {
                productName: args.productName,
                category: args.category,
                price: args.price,
                imgPath: args.imgPath,
                colors: args.colors,
            }, { new: true }).then((res) => {
                if (res) {
                    return res;
                }
            });
            return result;
        }),
        addProduct: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            yield connect();
            let product = new ProductModel({
                productName: args.productName,
                category: args.category,
                price: args.price,
                imgPath: args.imgPath,
                colors: args.colors,
            });
            const result = product.save().then((res) => {
                return res;
            });
            return result;
        }),
        deleteProduct: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield connect();
                yield ProductModel.findOneAndRemove({ _id: args.id });
                return true;
            }
            catch (error) {
                console.log("Error while delete:", error);
                return false;
            }
        }),
    },
};
exports.default = ServiceResolvers;
