interface DBConfig {
    DB: string;
    USER: string;
    PASSWORD: string;
    HOST: string;
    dialect: string; // Thay đổi kiểu dữ liệu thành string
    pool: {
      max: number;
      min: number;
      acquire: number;
      idle: number;
    };
  }

const databaseConfig: DBConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Nguyenviet2510",
    DB: "ecommerce",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

export default databaseConfig;