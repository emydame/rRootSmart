module.exports = (sequelize, DataTypes) => {
  const ProjectCategory = sequelize.define(
    "projectcategory",
    {
      projectCatId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
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
