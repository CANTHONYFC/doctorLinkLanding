export class Auditory {
    createUser?: string;
    createUserName?: string;
    createUserMail?: string;
    createDate?: string;
    updateUser?: string;
    updateUserName?: string;
    updateUserMail?: string;
    updateDate?: string;
    deleteUser?: string;
    deleteUserName?: string;
    deleteUserMail?: string;
    deleteDate?: string;
    status?:string;/* 'CREATED'|'UPDATE'|'DELETE'*/
    company?:string;
    parametersPagination?: any;

    /*UI*/
    index?: number;
    actions?: any[];
}
