const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_BOOKABLES_START':
      return {
        ...state,
        bookables: [],
        isLoading: true,
        error: false
      }
    case 'FETCH_BOOKABLES_FINISH':
      return {
        ...state,
        bookables: action.payload,
        isLoading: false,
        error: false
      }
    case 'FETCH_BOOKABLES_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case 'SET_GROUP':
      return {
        ...state,
        group: action.payload,
        bookableIndex: 0
      }
    case 'SET_BOOKABLE':
      return {
        ...state,
        bookableIndex: action.payload
      }
    case 'NEXT_BOOKABLE':
      const count = state.bookables.filter(
        bookable => bookable.group === state.group
      ).length

      return {
        ...state,
        bookableIndex: (state.bookableIndex + 1) % count
      }
    default:
      return state
  }
}

export default reducer
