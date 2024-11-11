import { Sequelize } from "sequelize";

const sequelize = new Sequelize(`bc70_MySQL_TheVien`, `root`, `1234`, {
    host: `localhost`,
    port: `3307`,
    dialect: `mysql`,
 });
 sequelize
 .authenticate()
 .then(() => {
    console.log(`Kết nối db thành công`);
 })
 .catch((err) => {
    console.log(err);
    console.log(`Kết nối db không thành công`);
 });
 export default sequelize