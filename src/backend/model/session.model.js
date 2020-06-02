module.exports = (sequelize, DataTypes) => {
  const ManageSession = sequelize.define("usersessions", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
    },
    userIP: {
      type: DataTypes.STRING,
    },
    timeLoggedIn: {
      type: DataTypes.TIME,
    },
    timeLoggedOut: {
      type: DataTypes.TIME,
    },

    sessionState: {
      type: DataTypes.BOOLEAN,
    },
    userToken: {
      type: DataTypes.STRING,
    },
  });
  return ManageSession;
};
