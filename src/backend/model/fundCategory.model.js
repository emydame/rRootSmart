module.exports = (sequelize, DataTypes) => {
  const FundCategory = sequelize.define(
    "fundcategories",
    {
      fundCatId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
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
