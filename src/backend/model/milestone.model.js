module.exports = (sequelize, DataTypes) => {
    const Milestone = sequelize.define(
      "milestone",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING
        },
        startDate: {
          type: DataTypes.STRING
        },
        endDate: {
          type: DataTypes.STRING
        },
        progress: {
            type: DataTypes.STRING
          },
        status: {
          type: DataTypes.STRING
        },
        update: {
          type: DataTypes.STRING
        }
      },
      {
        timestamps: false
      }
    );
    return Milestone;
  };
  