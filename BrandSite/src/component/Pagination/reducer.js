function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_ROWS":
      return {
        ...state,
        rows: Array.from(
          new Map(
            [...state?.rows, ...payload?.rows].map((item) => [
              item[state.key],
              item,
            ])
          ).values()
        ), // Append new rows to the existing rows
        totalCount: payload.totalCount,
        loading: false,
      };
    case "START_LOADING":
      return {
        ...state,
        requestedSkip: payload.requestedSkip,
        take: payload.take,
      };
    case "REQUEST_ERROR":
      return {
        ...state,
        loading: false,
      };
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
      };
    case "UPDATE_QUERY":
      return {
        ...state,
        lastQuery: payload,
      };
    default:
      return state;
  }
}
export default reducer;
