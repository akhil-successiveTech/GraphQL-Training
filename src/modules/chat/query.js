import { ChatMessage,ChatUser } from "../../models/chatModel.js"
import { AllMessages } from "./mutation.js"

export const chatQueryResolver ={
    ChatUsers: () => ChatUser.find(),
    ChatMessages: () => ChatMessage.find(),
    allMessages:(_,__,{user})=>
    {
        if(!user) 
        {
        throw new Error("Unauthorized")

        }
        if(user.role !== "admin")
        {
            throw new Error("Access denied")
        }
        return AllMessages;
    }
}