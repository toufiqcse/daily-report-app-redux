const { REPORT, DELETE } = require("./actionType");

const initialState = [];
const reportAddReducer = (state = initialState, action) => {
  const copiedState = [...state];
  const { type, payload, id } = action;

  switch (type) {
    case REPORT:
      const lastReportId = copiedState[copiedState.length - 1]?.id;
      const newReport = { ...payload, id: lastReportId ? lastReportId + 1 : 1 };
      copiedState.push(newReport);
      return copiedState;

    case DELETE:
      const updatedState = copiedState.filter((item) => item.id !== id);
      return updatedState;

    default:
      return state;
  }
};

export default reportAddReducer;
