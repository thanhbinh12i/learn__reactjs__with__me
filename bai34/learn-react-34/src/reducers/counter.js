const counterReducer = (state = 0, action) => {
      switch (action.type) {
            case "UP":
                  return state + action.number;
            case "DOWN":
                  return state - action.number;
            case "RESET":
                  return 0;
            default: return state;
      }

}
export default counterReducer;