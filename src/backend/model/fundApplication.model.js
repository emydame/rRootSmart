module.exports = (sequelize, DataTypes) => {
  const FundApplication = sequelize.define(
    "fundapplications",
    {
      id: {
        type: DataTypes.INTEGER,
        autoincrement: true,
        allowNull: false,
        primaryKey: true
      },
      applicationId: {
        type: DataTypes.STRING,
        allowNull: false
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
