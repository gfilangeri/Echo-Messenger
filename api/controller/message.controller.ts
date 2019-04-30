import DefaultController from "./default.controller";

import { Request, Response } from "express";
import express from "express";

import { Message, Chat } from "../entity";

import { getRepository } from "typeorm";

export class MessageController extends DefaultController {
    protected initializeRoutes(): express.Router {
        const router = express.Router();
        const messageRepo = getRepository(Message);
        const chatRepo = getRepository(Chat);

        router.route("/message").post((req: Request, res: Response) => {
            console.log("--- SENDING MESSAGE ---");
            const message = new Message();
            message.date = req.body.date;
            message.message = req.body.message;
            message.userId = req.body.userId;
            message.chatId = req.body.chatId;

            messageRepo.save(message).then((savedMessage: Message) => {
                res.send(savedMessage);
            });
        });
        router.route("/messages/:chatId").get((req: Request, res: Response) => {
            console.log("--- RETRIEVING MESSAGES ---");
            messageRepo.find({chatId: req.params.chatId}).then((foundMessages: Message[]) => {
                    res.send(foundMessages);
            });
        });
        return router;
    }
}
