export class Card{
    constructor(public id:number, public firstName:string, 
        public lastName:string, public middleName:string, public email:string, 
        public fax:string, public cell:string, 
        public work:string, public upVoteCount:number, public createdDateTime?:Date, 
        public updatedDateTime?:Date, public createdBy?:string, public updatedBy?:string ){
    }
}