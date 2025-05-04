import {Auditory} from "../../shared/models/auditory.model";

export class SyncTask extends Auditory {
    id?: string;
    code?: string;
    name: string;
    description?: string;
    trigger?: string;
    taskSet?: TaskSet;
    objectOrigin?: Object;
    objectDestiny?: Object;
    data?: string;
    executionOrder?: number;
    enable?: string;
}

export class TaskSet {
    id?: string;
    ownerTask?: OwnerTask;
}

export class OwnerTask {
    id?: string;
}

export class Object {
    id?: string;
    service?: string;
    code?: string;
    name?: string;
    description?: string;
    path?: string;
    data?: string;
}

export class Service {
    id?: string;
    domain?: Domain;
}

export class Domain {
    id?: string;
    protocol?: Protocol;
    address?: string;
    port?: string;
    path?: string;
    description?: string;
    data?: string;
}

export class Protocol {
    code?: string;
    name?: string;
}
