module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "projects",
    {
      projectId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      projectCatId: {
        type: DataTypes.STRING
      },
      projectName: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      createdBy: {
        type: DataTypes.STRING
      },
      dateStart: {
        type: DataTypes.STRING
      },
      dateEnd: {
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
  return Project;
};
