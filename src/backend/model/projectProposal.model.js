module.exports = (sequelize, DataTypes) => {
  const Proposal = sequelize.define(
    "projectproposal",
    {
      proposalId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
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
