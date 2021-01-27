"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletetUsers = exports.putUsers = exports.postUsers = exports.getUsers = void 0;
const users_json_1 = __importDefault(require("../../../data/users.json"));
const faker = require('faker');
const getUsers = (req, res) => {
    res.json({
        Response: users_json_1.default
    });
};
exports.getUsers = getUsers;
const postUsers = (req, res) => {
    let user = req.body;
    user["id"] = faker.random.uuid();
    users_json_1.default.push(user);
    res.json({
        Response: users_json_1.default
    });
};
exports.postUsers = postUsers;
const putUsers = (req, res) => {
    let user = req.body;
    users_json_1.default.filter(obj => {
        if (obj.id === user.id) {
            return obj = user;
        }
    });
    res.json({
        Response: users_json_1.default
    });
};
exports.putUsers = putUsers;
const deletetUsers = (req, res) => {
    res.json({
        Response: users_json_1.default
    });
};
exports.deletetUsers = deletetUsers;
//# sourceMappingURL=users.js.map