module.exports = (sequelize, DataTypes) => {
  const Fund = sequelize.define(
    "funds",
    {
      fundId: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        primaryKey: true,
      },
      organizationId: {
        type: DataTypes.STRING,
      },
      fundCatId: {
        type: DataTypes.STRING,  
      },
      amount: {
        type: DataTypes.STRING,    
      },
      status: {
        type: DataTypes.STRING,
      },
      dateInitiated: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return Fund;
};
