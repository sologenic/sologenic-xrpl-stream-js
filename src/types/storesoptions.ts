export interface IRedisOptions {
  port?: number;
  host?: string;
  family?: number;
  password?: string;
  db?: number;
}

export interface IMongoOptions {
  port?: number;
  host?: string;
  user?: string;
  password?: string;
  db?: string;
}

export interface IMySQLOptions {
  port?: number;
  host?: string;
  user?: string;
  password?: string;
  database?: string;
}
