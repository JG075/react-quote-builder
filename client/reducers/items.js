function items(state = [], action) {
  const i = action.i;

  switch (action.type) {
    case 'CANCEL_QUOTE':
      // return an empty array
      return [];
    case 'TOGGLE_EDIT_ITEM':
        // turn on toggleEdit for the item
        return [
          ...state.slice(0,i),
          {...state[i], toggleEdit: !state[i].toggleEdit},
          ...state.slice(i + 1)
        ];
    case 'DELETE_ITEM':
      return [
        ...state.slice(0,i),
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
}

export default items;
