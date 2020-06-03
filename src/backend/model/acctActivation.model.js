module.exports = (sequelize, DataTypes) => {
  const AcctActivation = sequelize.define(
    "useractivations",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      activationId: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
      },
      userId: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      activationStatus: {
        type: DataTypes.STRING
      },
      activationDate: {
        type: DataTypes.DATE
      }
    },
    {
      timestamps: false
    }
  );
  return AcctActivation;
};
