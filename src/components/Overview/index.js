import React from "react";
import { useHistory } from "react-router";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CgUserList } from "react-icons/cg";
import { Button, Box, Flex, Header } from "../styled";
import theme from "../styled/defaultTheme";

const Overview = () => {
  const history = useHistory();

  return (
    <>
      <Header data-cy="header">My Employees</Header>
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap={theme.spacings["3xl"]}
        marginTop="3xl"
      >
        <Box>
          <Button
            data-cy="newEmployeeButton"
            onClick={() => history.push(`/employee/create`)}
            cardBtn
          >
            <AiOutlineUserAdd fontSize={72} />
            <h3>Add new employees</h3>
          </Button>
        </Box>
        <Box>
          <Button
            data-cy="viewEmployeesButton"
            onClick={() => history.push("/view")}
            cardBtn
          >
            <CgUserList fontSize={72} />
            <h3>View all employees</h3>
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Overview;
