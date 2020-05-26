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
      dateCreated: {
        type: DataTypes.DATE
      }
    },
    {
      timestamps: false   
    }
  );
  return UserCategory;
};
