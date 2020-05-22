module.exports = (sequelize, DataTypes) => {
  const Audit = sequelize.define(
    "audit",
    {
      auditId: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        primaryKey: true
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
