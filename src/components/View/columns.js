import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../redux/employees";
import { Button, Flex } from "../styled";
import Tag from "../styled/Tag";
import theme from "../styled/defaultTheme";

const COLUMNS = ({ STATUS_COLORS, dispatch }) => [
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
      <Flex direction="column" alignItems="center">
        <Tag backgroundColor={STATUS_COLORS[status]}>{status}</Tag>
      </Flex>
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
        <Link to={`/employee/edit/${id}`}>
          <Button linkWithIcon>
            <AiFillEdit fontSize={24} />
          </Button>
        </Link>
        <Button linkWithIcon onClick={() => dispatch(deleteEmployee(id))}>
          <AiFillDelete fontSize={24} color={theme.colors.danger} />
        </Button>
      </Flex>
    ),
  },
];

// eslint-disable-next-line import/prefer-default-export
export { COLUMNS };
