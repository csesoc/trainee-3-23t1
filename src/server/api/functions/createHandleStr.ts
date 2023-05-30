const CreateHandleStr = (name: string) => {
  name = name.toLowerCase();
  name = name.replace(" ", "_");
  // generates a random number between 1000 and 9999
  let randomNumber = Math.floor(Math.random() * 9000) + 1000;
  name = name + randomNumber;
  return name;
};
