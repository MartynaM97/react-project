const strContains = (stringNumberOne, stringNumberTwo) => {
  if (stringNumberOne.toLowerCase().includes(stringNumberTwo.toLowerCase()))
    return true;
  else return false;
};

export default strContains;
