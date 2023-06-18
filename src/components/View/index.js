import React from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, Header } from "../styled";
import Table from "../styled/Table";
import theme from "../styled/defaultTheme";
import { COLUMNS } from "./columns";

const View = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { employees_records: employeesRecords } = useSelector(
    state => state.employees
  );

  const STATUS_COLORS = {
    ACTIVE: theme.colors.success,
    LEAVE_OF_ABSENCE: theme.colors.warning,
    TERMINATED: theme.colors.danger,
  };

  return (
    <>
      <Header data-cy="header">View Employees</Header>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop="lg"
      >
        <Table
          data-cy="employeeTable"
          columns={COLUMNS({ STATUS_COLORS, dispatch, history })}
          data={employeesRecords}
        />
        <Box>
          <Button data-cy="backButton" onClick={() => history.push("/")}>
            Back
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default View;
