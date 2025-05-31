import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',       // docker exposes it on your machine
  port: 5432,
  user: 'postgres',
  password: 'password',
  database: 'snippets',
});

export default pool;
