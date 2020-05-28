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
        type: Sequelize.STRING(35)
      },
      lastName: {
        type: Sequelize.STRING(35)
      },
      email: {
        type: Sequelize.STRING(35),
        required: true
      },
      phoneNumber: {
        type: Sequelize.STRING(25)
      },
      role: {
        type: Sequelize.STRING(25)
      },
      privilege: {
        type: Sequelize.STRING(25)
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      dateCreated: {
        type: Sequelize.DATE
      }
    },
    {
      timestamps: false
    }
  );

  return User;
};
