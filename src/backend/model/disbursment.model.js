module.exports = (sequelize, DataTypes) => {
  const Disbursement = sequelize.define(
    "disbursements",
    {
      disbursementId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      applicationId: {
        type: DataTypes.STRING
      },
      fundId: {
        type: DataTypes.STRING
      },
      disbursedTo: {
        type: DataTypes.STRING
      },
      disbursedBy: {
        type: DataTypes.STRING
      },
      bankName: {
        type: DataTypes.STRING
      },
      accountNunber: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  );
  return Disbursement;
};
