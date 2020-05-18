const towns = {
  states: {
    Abia: {
      lgas: {
        "Aba North": {
          town: []
        },
        "Aba South": {
          town: []
        },
        Arochukwu: {
          town: []
        },
        "Ukwa West": {
          towns: []
        },
        "Osisoma Ngwa": {
          towns: []
        },
        "Obi Ngwa": {
          towns: []
        },
        "Isiala Ngwa": {
          town: []
        },
        Isuikwato: {
          towns: []
        },
        Bende: {
          towns: []
        },
        Ohafia: {
          towns: []
        },
        "Umuahia South": {
          towns: []
        },
        "Usiala Ngwa South": {
          towns: []
        },
        "Umu Nneochi": {
          towns: []
        }
      }
    },
    Abuja: {
      lgas: {
        Abaji: {
          towns: []
        },
        "Abuja Municipal Area Council": {
          towns: [
            "Nyanya",
            "Deidei",
            "Jiwa",
            "Apo Tafyi",
            "Lugbe",
            "Aviation village",
            "Giri",
            "Gausa",
            "Kurudu",
            "Karshi",
            "Gude",
            "Kugbo",
            "Karu",
            "Jikwoyi",
            "Wawa",
            "Odu",
            "Kuruduma",
            "Apo",
            "Kugbo",
            "Orozo",
            "Kyami",
            "Kpegyi",
            "Gurku",
            "Kpaduma"
          ]
        },
        Bwari: {
          towns: []
        },
        Gwagwalada: {
          towns: []
        },
        Kuje: {
          towns: []
        },
        Kwali: {
          towns: []
        }
      }
    }
  }
};

function getTown(obj) {
  const res = {};
  function recurse(obj, current) {
      for (const key in obj) {
          let value = obj[key];
          if(value != undefined) {
              if (value && typeof value === 'object') {
                  recurse(value, key);
              } else {
                  // Do your stuff here to var value
                  res[key] = value;
              }
          }
      }
  }
  recurse(obj);
  return res;
}

getTown(towns);



const getTowns = (state, lga) => {
  
};

export default getTown;