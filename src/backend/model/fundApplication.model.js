module.exports = (sequelize, DataTypes) => {
  const FundApplication = sequelize.define(
    "fundapplications",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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

      projectName: {
        type: DataTypes.STRING
      },
      dateStart: {
        type: DataTypes.DATE
      },
      dateEnd: {
        type: DataTypes.DATE
      },
      description: {
        type: DataTypes.STRING
      },
      proposals: {   
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  );
  return FundApplication;
};
