export default function(state, name) {
  if (state.name !== name) {
    return {
      ...state,
      name
    };
  }
  return state;
}
