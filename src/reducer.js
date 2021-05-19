export const initialState = {
  user: null,
  playList: [],
  playing: false,
  item: null,
  token: null,
  //   token:
  //     "BQAqg0dSV52ia4Z-6S95v83URL14k2NAO7mQHlDBmXUCO5SuvkG4aVdrgLrdw399EhiBNuABs4OjKt6KA8isIFhoK__Q-O35U3HwjPNxBbglpAmNM6xhvyixaMaFR3GMINF7QXEVnI20NBRLytv9FdQrj05DW5x7yodi0RivDduQHrKY_eZ3",
};

const reducer = (state, action) => {
  //   console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};
export default reducer;
