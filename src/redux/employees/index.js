import { createSlice } from "@reduxjs/toolkit";

const defaultEmployee = {
  id: new Date().getTime(),
  firstName: "Abe",
  surname: "Simpson",
  email: "abe.simpson@springfield.com",
  birthDate: "1907-05-25",
  jobTitle: "Work grouch",
  status: "ACTIVE",
};

const initialState = {
  employees_records: [defaultEmployee],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    saveNewEmployee: {
      prepare: employee => ({
        payload: { ...employee, id: new Date().getTime() },
      }),
      reducer(draftState, action) {
        draftState.employees_records = [
          ...draftState.employees_records,
          action.payload,
        ];
      },
    },
    deleteEmployee: {
      reducer(draftState, action) {
        draftState.employees_records = draftState.employees_records.filter(
          item => item.id !== action.payload
        );
      },
    },
    updateEmployee: {
      reducer(draftState, action) {
        const index = draftState.employees_records.indexOf(
          draftState.employees_records.find(
            item => String(item.id) === action.payload.employeeId
          )
        );

        draftState.employees_records[index] = action.payload.employee;
      },
    },
  },
});

export const { saveNewEmployee, deleteEmployee, updateEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
