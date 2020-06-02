module.exports = (sequelize, DataTypes) => {
  const Repayment = sequelize.define("repayment", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    repaymentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER
    },
    applicationId: {
      type: DataTypes.INTEGER
    },
    repaymentDAte: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.STRING
    }
  });
  return Repayment;
};
