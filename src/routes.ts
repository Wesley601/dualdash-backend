import {UserController} from "./controller/UserController";
import { Router, Request, Response, response } from "express";
import { request } from "http";

const router = Router();

router.get('/users', (r, re) => {
    return response.status(201).send();
})

export { router }