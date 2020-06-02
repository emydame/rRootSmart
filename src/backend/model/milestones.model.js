module.exports = (sequelize, DataTypes) => {
  const Milestone = sequelize.define("milestone", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    milestoneId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    applicationId: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    dateStart: {
      type: DataTypes.DATE
    },
    dateEnd: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.STRING
    },
    confirmedBy: {
      type: DataTypes.STRING
    },
    dateConfirmed: {
      type: DataTypes.DATE
    }
  });
  return Milestone;
};
