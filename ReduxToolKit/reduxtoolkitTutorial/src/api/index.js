import Chance from "chance";

const chance = Chance();

const fakeUSerData = () => {
  // chance.name({ middle: true });
  console.log(chance.name({ middle: true }));
  return chance.name({ middle: true });
};

export default fakeUSerData;
