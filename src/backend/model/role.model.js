module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    "roles",  
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      roleName: {
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
  return Role;
};
