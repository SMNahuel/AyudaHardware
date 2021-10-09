const initializeState = {
  name: null,
  email: null,
  id: null,
  pc_armadas: null,
  photo_url: null,
  pc_select: null,
  noticies: null,
};

function reducer(state = initializeState, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        id: action.payload.id,
        pc_armadas: action.payload.pc_armadas,
        photo_url: action.payload.photo_url,
      };
    case "logout":
      return initializeState;
    case "pc":
      return {
        ...state,
        pc_select: action.payload.arquitectura,
      };
    case "noticies":
      return {
        ...state,
        noticies: action.payload,
      };
    default:
      return { ...state };
  }
}

export default reducer;
