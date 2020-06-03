module.exports = (sequelize, DataTypes) => {
  const FundCategory = sequelize.define(
    "fundcategories",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      fundCatId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      categoryName: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      createdBy: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  );
  return FundCategory;
};
