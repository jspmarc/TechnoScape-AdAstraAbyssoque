const defaultUser = () => {
  return {
    name: "John Doe",
    email: "john.doe@gmail.com",
  };
};

const defaultState = () => {
  return {
    user: defaultUser(),
    login: false,
    queryNav: "",
    query: "",
    recAns: [],
  };
};

export default defaultState;
