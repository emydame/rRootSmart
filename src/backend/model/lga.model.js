module.exports = (sequelize, Datatypes) => {
  const NgLga = sequelize.define(
    "lgas",
    {
      id: {
        type: Datatypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      Abuja: {
        type: Datatypes.STRING,
      },
      Abia: {
        type: Datatypes.STRING,
      },
      Adamawa: {
        type: Datatypes.STRING,
      },
      AkwaIbom: {
        type: Datatypes.STRING,
      },
      Anambra: {
        type: Datatypes.STRING,
      },
      Bauchi: {
        type: Datatypes.STRING,
      },
      Bayelsa: {
        type: Datatypes.STRING,
      },
      Benue: {
        type: Datatypes.STRING,
      },
      Borno: {
        type: Datatypes.STRING,
      },
      CrossRiver: {
        type: Datatypes.STRING,
      },
      Delta: {
        type: Datatypes.STRING,
      },
      Ebonyi: {
        type: Datatypes.STRING,
      },
      Edo: {
        type: Datatypes.STRING,
      },
      Ekiti: {
        type: Datatypes.STRING,
      },
      Enugu: {
        type: Datatypes.STRING,
      },
      Gombe: {
        type: Datatypes.STRING,
      },
      Imo: {
        type: Datatypes.STRING,
      },
      Jigawa: {
        type: Datatypes.STRING,
      },
      Kaduna: {
        type: Datatypes.STRING,
      },
      Kano: {
        type: Datatypes.STRING,
      },
      Katsina: {
        type: Datatypes.STRING,
      },
      Kebbi: {
        type: Datatypes.STRING,
      },
      Kogi: {
        type: Datatypes.STRING,
      },
      Kwara: {
        type: Datatypes.STRING,
      },
      Lagos: {
        type: Datatypes.STRING,
      },
      Nasarawa: {
        type: Datatypes.STRING,
      },
      Niger: {
        type: Datatypes.STRING,
      },
      Ogun: {
        type: Datatypes.STRING,
      },
      Ondo: {
        type: Datatypes.STRING,
      },
      Osun: {
        type: Datatypes.STRING,
      },
      Oyo: {
        type: Datatypes.STRING,
      },
      Plateau: {
        type: Datatypes.STRING,
      },
      Rivers: {
        type: Datatypes.STRING,
      },
      Sokoto: {
        type: Datatypes.STRING,
      },
      Taraba: {
        type: Datatypes.STRING,
      },
      Yobe: {
        type: Datatypes.STRING,
      },
      Zamfara: {
        type: Datatypes.STRING,
      },
    },
    { timestamps: false }
  );
  return NgLga;
};
