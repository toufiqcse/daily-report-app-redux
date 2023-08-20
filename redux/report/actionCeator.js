import { DELETE, REPORT } from "./actionType";

export const report = (value) => {
  return {
    type: REPORT,
    payload: value,
  };
};
export const deleteReport = (id) => {
  return {
    type: DELETE,
    id: id,
  };
};
