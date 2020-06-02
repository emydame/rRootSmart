module.exports = (sequelize, DataTypes) => {
  const ProjectCategory = sequelize.define(
    "projectcategory",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      projectCatId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      categoryName: {
        type: DataTypes.STRING
      },
      categoryDescription: {
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
  return ProjectCategory;
};
