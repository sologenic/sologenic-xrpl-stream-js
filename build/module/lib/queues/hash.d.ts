import { MQTX, IQueue, HashTransactionHandlerOptions } from '../../types';
export default class HashQueue implements IQueue {
    private hash;
    constructor(options: HashTransactionHandlerOptions);
    deleteQueue(queue: string): Promise<boolean>;
    queues(): Promise<string[]>;
    private _exist;
    /**
     *
     * @param queue
     * @param data
     * @param id
     * @description add an object to the queue
     */
    add(queue: string, data: MQTX, id?: string): Promise<MQTX>;
    /**
     *
     * @param queue
     * @param id
     * @description returns a specific object within the queue
     */
    get(queue: string, id: string): Promise<MQTX | undefined>;
    /**
     *
     * @param queue
     * @description returns all elements of the queue
     */
    getAll(queue: string): Promise<Array<MQTX>>;
    /**
     *
     * @param queue
     * @description pop an element off the end of the queue
     */
    pop(queue: string): Promise<MQTX | undefined>;
    /**
     *
     * @param queue
     * @param id
     * @description delete an object by id from the queue
     */
    del(queue: string, id: string): Promise<boolean>;
    /**
     * @param queue
     * @description delete all elements from the queue
     */
    delAll(queue: string): Promise<boolean>;
    appendEvent(queue: string, id: string, event_name: string): Promise<boolean>;
}
