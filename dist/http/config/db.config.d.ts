interface DBConfig {
    DB: string;
    USER: string;
    PASSWORD: string;
    HOST: string;
    dialect: string;
    pool: {
        max: number;
        min: number;
        acquire: number;
        idle: number;
    };
}
declare const databaseConfig: DBConfig;
export default databaseConfig;
