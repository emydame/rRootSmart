module.exports = (sequelize, DataTypes) => {
  const Audit = sequelize.define(
    "audit",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      auditId: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
      },
      action: {
        type: DataTypes.STRING
      },
      actionStatus: {
        type: DataTypes.STRING
      },
      performedBy: {
        type: DataTypes.STRING
      },
      actionTime: {
        type: DataTypes.TIME
      }
    },
    {
      timestamps: false
    }
  );
  return Audit;
};
