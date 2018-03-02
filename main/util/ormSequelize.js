const Sequelize = require('sequelize');
const db_manager = require('./db_manager');

const seq = new Sequelize(db_manager.mysql.database, db_manager.mysql.user,
  db_manager.mysql.password, {
    host: db_manager.mysql.host,
    port: db_manager.mysql.port,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

//测试数据库链接
seq.authenticate().then(function() {
    console.log("数据库连接成功");
}).catch(function(err) {
    //数据库连接失败时打印输出
    console.error(err);
    throw err;
});

module.exports.A_Admin = require('../entity/A_Admin')(seq, Sequelize);
module.exports.Administrator = require('../entity/Administrator')(seq, Sequelize);
module.exports.AllUser = require('../entity/AllUser')(seq, Sequelize);
module.exports.Application = require('../entity/Application')(seq, Sequelize);
module.exports.B_Admin = require('../entity/B_Admin')(seq, Sequelize);
module.exports.CheckNotice = require('../entity/CheckNotice')(seq, Sequelize);
module.exports.Demand = require('../entity/Demand')(seq, Sequelize);
module.exports.Notice = require('../entity/Notice')(seq, Sequelize);
module.exports.OrdinaryUser = require('../entity/OrdinaryUser')(seq, Sequelize);
module.exports.OtherUser = require('../entity/OtherUser')(seq, Sequelize);
module.exports.Service = require('../entity/Service')(seq, Sequelize);
module.exports.SuperAdmin = require('../entity/SuperAdmin')(seq, Sequelize);
