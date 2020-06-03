module.exports = (sequelize, DataTypes) => {
  const LoginUser = sequelize.define(
    "userlogin",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      loginId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.STRING,
        required: true
      },
      organizationId: {
        type: DataTypes.STRING,
        required: true
      },
      email: {
        type: DataTypes.STRING,
        required: true
      },
      password: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  );
  return LoginUser;
};
