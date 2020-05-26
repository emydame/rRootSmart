module.exports = (sequelize, DataTypes) => {
  const UserCategory = sequelize.define(
    "usercategories",
    {
      userCatId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      loginId : {
        type : DataTypes.STRING,
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
        type: DataTypes.DATE
      }
    },
    {
      timestamps: false   
    }
  );
  return UserCategory;
};
