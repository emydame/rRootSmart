module.exports = (sequelize, Datatypes) => {
  const NgState = sequelize.define(
    "states",
    {
      id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Datatypes.STRING,
      },
    },
    { timestamps: false }
  );
  return NgState;
};
