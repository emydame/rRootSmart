module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "users",
    {
      userId: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      organizationId: {
        type: Sequelize.STRING
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      privilege: {
        type: Sequelize.STRING
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      dateCreated: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false
    }
  );

  return User;
};
