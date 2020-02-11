const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const Op = Sequelize.Op


let sequelize;

sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
  {operatorsAliases:Sequelize.Op},
  );

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User=require('./User.js')(sequelize,Sequelize);
db.Board=require('./Board.js')(sequelize,Sequelize);
db.Card=require('./Card.js')(sequelize,Sequelize);
db.List=require('./List.js')(sequelize,Sequelize);

db.Board.belongsTo(db.User)
db.Board.hasMany(db.List)
db.List.hasMany(db.Card)

module.exports = db;
