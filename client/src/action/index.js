export const login = (user) => {
  console.log(user);
  return { type: "login", payload: user };
};

export const logout = () => {
  return { type: "logout" };
};
