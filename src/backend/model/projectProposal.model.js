module.exports = (sequelize, DataTypes) => {
  const Proposal = sequelize.define(
    "projectproposal",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true
      },
      proposalId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING
      },
      applicationId: {
        type: DataTypes.STRING
      },
      projectId: {
        type: DataTypes.STRING
      },
      filePath: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  );
  return Proposal;
};
