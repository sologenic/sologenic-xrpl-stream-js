import { MQTX, IQueue, RedisTransactionHandlerOptions } from '../../types';
export default class RedisQueue implements IQueue {
    private redis;
    constructor(options: RedisTransactionHandlerOptions);
    deleteQueue(queue: string): Promise<boolean>;
    queues(): Promise<string[]>;
    /**
     *
     * @param queue
     * @param data
     * @param id
     */
    add(queue: string, data: MQTX, id?: string): Promise<MQTX>;
    /**
     *
     * @param queue
     * @param id
     */
    get(queue: string, id: string): Promise<MQTX | undefined>;
    /**
     *
     * @param queue
     */
    getAll(queue: string): Promise<MQTX[]>;
    /**
     *
     * @param queue
     */
    pop(queue: string): Promise<MQTX | undefined>;
    del(queue: string, id: string): Promise<boolean>;
    /**
     *
     * @param queue
     */
    delAll(queue: string): Promise<boolean>;
    appendEvent(queue: string, id: string, event_name: string): Promise<boolean>;
}
