module.exports = (sequelize, Sequelize) => {
  return sequelize.define('List', {
    title: {
      type: Sequelize.STRING
    },
    pos: {
      type: Sequelize.DOUBLE,
      defaultValue: 65535
    }
  })}