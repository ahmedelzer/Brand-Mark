export const getRemoteRows = (requestedSkip, take) => {
  dispatch({ type: "START_LOADING", payload: { requestedSkip, take } });
};
