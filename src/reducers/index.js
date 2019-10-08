const initialState = {
  apps: [],
};

const  reducer = (state = initialState, action) => {

  switch(action.type) {
    case 'APPS_LOADED' :
      return {
        apps: action.payload
      };

    default: 
      return state;
  }
};

export default reducer;