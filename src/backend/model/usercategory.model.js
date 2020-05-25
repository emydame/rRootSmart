module.exports = (sequelize, DataTypes) => {
  const UserCategory = sequelize.define(
    "usercategories",
    {
      userCatId: {
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
      },
      createdAt: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  );
  return UserCategory;
};
