export const login = (user) => {
  return { type: "login", payload: user };
};

export const logout = () => {
  return { type: "logout" };
};

export const pcArmadas = () => {
  return { type: "pc_armadas" };
};

export const noticies = (noticies) => {
  return { type: "noticies", payload: noticies };
};

export const PC = (pc) => {
  return { type: "pc", payload: pc };
};
