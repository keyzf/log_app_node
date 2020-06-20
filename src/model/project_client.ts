import { Model, DataTypes } from "sequelize";
import db from "../db/mysql";

class ProjectClient extends Model {}
ProjectClient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        uuid: {
            type: DataTypes.STRING(15),
            defaultValue: "",
            comment: "项目uuid",
        },
        clientid: {
            type: DataTypes.STRING(200),
            defaultValue: "",
            comment: "客户端的id",
        },
        name: {
            type: DataTypes.STRING(100),
            defaultValue: "",
            comment: "客户端名称",
        },
    },
    {
        sequelize: db,
        freezeTableName: true,
        tableName: "t_project_client",
        indexes: [
            {
                fields: ["uuid"],
            },
        ],
    }
);

//强制初始化数据库
ProjectClient.sync({ force: true });

export default {
    insert: function (model: any) {
        return ProjectClient.create(model);
    },
    get: function (id: number) {
        return ProjectClient.findOne({
            where: {
                id,
            },
        });
    },
};