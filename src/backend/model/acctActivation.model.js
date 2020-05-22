module.exports = (sequelize, DataTypes) => {
  const AcctActivation = sequelize.define(
    "useractivations",
    {
      activationId: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        primaryKey: true
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
