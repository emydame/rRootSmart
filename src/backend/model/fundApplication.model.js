module.exports = (sequelize, DataTypes) => {
  const FundApplication = sequelize.define(
    "fundapplications",
    {
      applicationId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      organizationId: {
        type: DataTypes.STRING
      },
      fundId: {
        type: DataTypes.STRING
      },
      fundCatId: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
      },
      applicationDate: {
        type: DataTypes.DATE
      }
    },
    {
      timestamps: false
    }
  );
  return FundApplication;
};
