import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { deleteEmployee } from "../../redux/employees";
import { Button, Flex } from "../styled";
import Tag from "../styled/Tag";
import theme from "../styled/defaultTheme";

const COLUMNS = ({ STATUS_COLORS, dispatch, history }) => [
  {
    label: "First name",
    dataIndex: "firstName",
  },
  {
    label: "Surname",
    dataIndex: "surname",
  },
  {
    label: "Email",
    dataIndex: "email",
  },
  {
    label: "Birth date",
    dataIndex: "birthDate",
  },
  {
    label: "Job title",
    dataIndex: "jobTitle",
  },
  {
    label: "Status",
    dataIndex: "status",
    render: ({ status }) => (
      <Tag backgroundColor={STATUS_COLORS[status]}>{status}</Tag>
    ),
  },
  {
    label: "Actions",
    render: ({ id }) => (
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="center"
        gap="2rem"
      >
        <Button
          linkWithIcon
          onClick={() => history.push(`/employee/edit/${id}`)}
        >
          <AiFillEdit fontSize={24} />
        </Button>
        <Button linkWithIcon onClick={() => dispatch(deleteEmployee(id))}>
          <AiFillDelete fontSize={24} color={theme.colors.danger} />
        </Button>
      </Flex>
    ),
  },
];

// eslint-disable-next-line import/prefer-default-export
export { COLUMNS };
