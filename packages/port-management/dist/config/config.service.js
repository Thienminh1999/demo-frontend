"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configService = void 0;
require("dotenv").config();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }
    getPort() {
        return this.getValue("PORT", true);
    }
    isProduction() {
        const mode = this.getValue("MODE", false);
        return mode != "DEV";
    }
    getTypeOrmConfig() {
        return {
            type: "postgres",
            host: this.env.POSTGRES_HOST,
            port: parseInt(this.env.POSTGRES_PORT),
            username: this.env.POSTGRES_USER,
            password: this.env.POSTGRES_PASSWORD,
            database: this.env.POSTGRES_DATABASE,
            entities: ["**/*.entity{.ts,.js}"],
            migrationsTableName: "migration",
            migrations: ["src/migration/*.ts"],
            ssl: this.isProduction(),
            synchronize: true,
            autoLoadEntities: true,
        };
    }
}
const configService = new ConfigService(process.env).ensureValues([
    "POSTGRES_HOST",
    "POSTGRES_PORT",
    "POSTGRES_USER",
    "POSTGRES_PASSWORD",
    "POSTGRES_DATABASE",
]);
exports.configService = configService;
//# sourceMappingURL=config.service.js.map