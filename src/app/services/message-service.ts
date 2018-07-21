import { Subject } from "rxjs";

export class MessageService{

    private messagesSubject:Subject<string> = new Subject();
    
    public getSubject(){
        return this.messagesSubject;
    }

    public addMessage(message:string){
        this.messagesSubject.next(message);
    }

}