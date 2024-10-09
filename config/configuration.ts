export default () => ({
  service: {
    host: process.env.SERVICE_HOST,
    port: process.env.SERVICE_PORT || 5083,
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.POSTGRES_USERNAME ?? 'postgres',
    password: process.env.POSTGRES_PASSWORD ?? 'postgres',
    name: process.env.POSTGRES_DB ?? 'be-user',
    synchronize: (process.env.POSTGRES_SYNC ?? '').toString() === 'true',
    entities: [`${__dirname}/../**/*.entity.{ts,js}`],
    subscribers: [`${__dirname}/../**/*.subscriber.{ts,js}`],
    logging: (process.env.POSTGRES_LOG ?? '').toString() === 'true',
  },
});
