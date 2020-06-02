module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "verifyemail",
      {
        userId: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false,
        
        },
        dateCreated: {
          type: DataTypes.DATE,
          required : true,
          expires : 86400
        }
      },
      {
        timestamps: false
      }
    );
  
    return User;
  };
  