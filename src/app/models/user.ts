import { Address } from './address';
import { Role } from './role';

export class User{
    constructor(public id:number, public firstName:string, 
        public lastName:string, public middleName:string, public userName:string, 
        public password:string,public address:Address,public roles?:Role[],public createdDateTime?:Date, 
        public updatedDateTime?:Date ){
    }
}