module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "projects",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      projectId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      projectCatId: {
        type: DataTypes.INTEGER,
        references: {         
          model: 'projectcategories',
          key: 'id'
        }
      },
      
      projectName: {
        type: DataTypes.STRING
      },
        type: DataTypes.STRING
      },
      createdBy: {
        type: DataTypes.STRING
      },
      dateStart: {
        type: DataTypes.DATE
      },
      dateEnd: {
        type: DataTypes.DATE
      },
      fund: {
        type: DataTypes.STRING
      },
      dateCreated: {
        type: DataTypes.DATE
      },
      status: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }

  );


  Project.associate = function(models) {
    Project.belongsTo(models.projectCategory, {foreignKey: 'id', as: 'category'})
  };

  
  ProjectCategory.associate = function(models) {
    ProjectCategory.hasMany(models.project, {as: 'project'}, {foreignKey: 'id'})
  }
  return Project;
};
