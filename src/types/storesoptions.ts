export interface IRedisOptions {
  port?: number;
  host?: string;
  family?: number;
  password?: string;
  db?: number;
}

export interface IMemcachedOptions {
  servers: string;
  clientOpts: {
    expires?: number;
    retries?: number;
    logger?: Console;
    failover?: boolean;
    failoverTime?: number;
    timeout?: number;
  };
}
