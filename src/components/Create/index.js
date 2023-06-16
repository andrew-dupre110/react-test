import React, { useCallback } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Flex, Header } from "../styled";
import FormField from "./FormField";
import FormButtons from "./FormButtons";
import formValidationSchema from "./formValidationSchema";
import {
  saveNewEmployee,
  updateEmployee,
} from "../../redux/employees/actionCreators";

const EMPLOYEE_STATUS = ["ACTIVE", "LEAVE_OF_ABSENCE", "TERMINATED"];

const Create = () => {
  const history = useHistory();
  const { employees_records: employeesRecords } = useSelector(
    state => state.employees
  );
  const dispatch = useDispatch();
  const { employeeId } = useParams();

  const initialValues = {
    firstName: "",
    surname: "",
    email: "",
    birthDate: "",
    status: "",
    jobTitle: "",
  };

  const submitForm = useCallback(
    (employee, actions) => {
      if (employeeId) {
        dispatch(updateEmployee(employeeId, employee));
        history.push("/view");
      } else {
        dispatch(saveNewEmployee(employee));
        actions.resetForm();
      }
    },
    [dispatch]
  );

  return (
    <>
      <Header>{employeeId ? "Edit employee" : "Create new employee"}</Header>
      <Formik
        validationSchema={formValidationSchema}
        onSubmit={submitForm}
        initialValues={
          employeeId
            ? employeesRecords.find(item => String(item.id) === employeeId)
            : initialValues
        }
      >
        <Flex alignItems="center" justifyContent="center" marginTop="3xl">
          <Flex alignItems="left" direction="column" width="300px">
            <FormField name="firstName" placeholder="First name" />
            <FormField name="surname" placeholder="Surname" />
            <FormField name="email" placeholder="Email" />
            <FormField name="birthDate" placeholder="Birth date" type="date" />
            <FormField
              name="status"
              placeholder="Please select an option"
              type="select"
              options={EMPLOYEE_STATUS}
            />
            <FormField name="jobTitle" placeholder="Job title" />
            <FormButtons />
          </Flex>
        </Flex>
      </Formik>
    </>
  );
};

export default Create;
