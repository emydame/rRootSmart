module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    "payments",
    {
      paymentId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      organizationId: {
        type: DataTypes.STRING
      },
      fundId: {
        type: DataTypes.STRING
      },
      accountNumber: {
        type: DataTypes.INTEGER
      },
      bankName: {
        type: DataTypes.STRING
      },
      amount: {
        type: DataTypes.DOUBLE
      },
      status: {
        type: DataTypes.STRING
      },
      paidBy: {
        type: DataTypes.STRING
      },
      paymentDate: {
        type: DataTypes.DATE
      }
    },
    {
      timestamps: false
    }
  );
  return Payment;
};
