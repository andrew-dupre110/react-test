import * as actions from ".";

/* eslint-disable import/prefer-default-export */
export const saveNewEmployee = employee => dispatch => {
  dispatch(actions.saveNewEmployee(employee));
};

export const deleteEmployee = employeeId => dispatch => {
  dispatch(actions.deleteEmployee(employeeId));
};

export const updateEmployee = (employeeId, employee) => dispatch => {
  dispatch(actions.updateEmployee({ employeeId, employee }));
};
