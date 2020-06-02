module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "verifyemail",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateCreated: {
        type: DataTypes.DATE,
        required: true,
        expires: 86400
      }
    },
    {
      timestamps: false
    }
  );

  return User;
};
