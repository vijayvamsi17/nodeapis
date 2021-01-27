import { Request, Response } from "express";
import users from "../../../data/users.json"
const faker = require('faker');

/**
 * Get all Avaialable users
 * @route GET /users
 */
export const getUsers = (req: Request, res: Response) => {
    res.json({
        Response: users
      });
};

/**
 * Get all Avaialable users
 * @route POST /users
 */
export const postUsers = (req: Request, res: Response) => {
    let user = req.body;
    user["id"] = faker.random.uuid();
    users.push(user)
    res.json({
        Response: users
      });
};

/**
 * Get all Avaialable users
 * @route PUT /users
 */
export const putUsers = (req: Request, res: Response) => {
    let user = req.body;
    users.forEach((obj, idx) => {
        if(obj.id === user.id) {
            users[idx] = user;
        }
    });
    res.json({
        Response: users
      });
};

/**
 * Get all Avaialable users
 * @route DELETE /users/:userId
 */
export const deletetUsers = (req: Request, res: Response) => {
    const userId = req.params.userId;
    users.forEach((obj, idx) => {
        if(obj.id === userId) {
            users.splice(idx,1);
        }
    });
    console.log(users.length);
    res.json({
        Response: users
      });
};