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
        type: DataTypes.STRING(25)
      },
      description: {
        type: DataTypes.STRING(200)
      },
      createdBy: {
        type: DataTypes.STRING(35)
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
