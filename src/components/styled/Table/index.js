import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import styled from "styled-components";
import theme from "../defaultTheme";

const StyledTable = styled.table`
  width: 80vw;
  border-radius: 12px;
  margin: ${theme.spacings["2xl"]} 0;
  -webkit-box-shadow: -1px 3px 15px 0px ${theme.colors.primary};
  -moz-box-shadow: -1px 3px 15px 0px ${theme.colors.primary};
  box-shadow: -1px 3px 15px 0px ${theme.colors.primary};
  th {
    font-size: ${theme.textSizes.lg};
    color: ${theme.colors.secondaryTextColor};
  }
  td,
  th {
    border: none;
    border-bottom: 1px solid ${theme.colors.lightGray};
  }
  th {
    padding: 1.5rem 1rem;
  }
  td {
    padding: 1.5rem;
  }
`;

const NoData = styled.div`
  display: grid;
  place-items: center;
  gap: 1rem;
  margin: ${theme.spacings.md};
  h1 {
    color: ${theme.colors.primaryTextColor};
  }
`;

const Table = ({ columns, data }) => (
  <StyledTable>
    <thead>
      <tr>
        {columns.map((column, columnIndex) => (
          <th key={columnIndex}>{column.label}</th>
        ))}
      </tr>
    </thead>

    <tbody>
      {data.length === 0 && (
        <tr>
          {columns.map((dataColumn, dataColumnIndex) => (
            <td key={dataColumnIndex}>
              {dataColumnIndex === Math.floor(columns.length / 2) && (
                <NoData>
                  <FcDeleteDatabase fontSize={120} />
                  <h1>No data to display</h1>
                </NoData>
              )}
            </td>
          ))}
        </tr>
      )}
      {data.map(row => (
        <tr key={row.id}>
          {columns.map((dataColumn, dataColumnIndex) => (
            <td key={dataColumnIndex}>
              {dataColumn.render
                ? dataColumn.render(row)
                : row[dataColumn.dataIndex]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </StyledTable>
);

export default Table;
