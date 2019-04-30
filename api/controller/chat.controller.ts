import DefaultController from "./default.controller";

import { Request, Response } from "express";
import express from "express";

import { Chat } from "../entity";

import { getRepository } from "typeorm";

export class ChatController extends DefaultController {
    protected initializeRoutes(): express.Router {
        const router = express.Router();
        const chatRepo = getRepository(Chat);

        router.route("/chat").post((req: Request, res: Response) => {
            console.log("--- CREATING CHAT ---");
            const chat = new Chat();
            chat.group = req.body.group;
            chat.title = req.body.title;

            chatRepo.save(chat).then((savedChat: Chat) => {
                res.send(savedChat);
            });
        });
        router.route("/chat").get((req: Request, res: Response) => {
            console.log("--- RETRIEVING CHATS ---");
            chatRepo.find().then((foundChats: Chat[]) => {
                    res.send(foundChats);
            });
        });
        return router;
    }
}
