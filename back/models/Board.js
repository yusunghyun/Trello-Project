module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Board', {
    title: {
      type: Sequelize.STRING
    },
    bgColor: {
      type: Sequelize.STRING,
      defaultValue: 'rgb(0, 121, 191)'
    }
  })}