module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      userId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      organizationId: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      otherName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        required: true
      },
      phoneNumber: {
        type: DataTypes.STRING
      },
      role: {
        type: DataTypes.STRING
      },
      privilege: {
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

  return User;
};
