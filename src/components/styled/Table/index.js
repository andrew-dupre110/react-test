import React, { useState, useMemo } from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import styled from "styled-components";
import theme from "../defaultTheme";
import Pagination from "../Pagination";

const TableContainer = styled.div`
  position: relative;
  width: 80vw;
  margin-bottom: ${({ marginBottom = 0 }) => marginBottom};
  padding-bottom: 1rem;
  border-radius: 12px;
  box-shadow: -1px 10px 19px -6px rgba(0, 0, 0, 0.71);
  -webkit-box-shadow: -1px 10px 19px -6px rgba(0, 0, 0, 0.71);
  -moz-box-shadow: -1px 10px 19px -6px rgba(0, 0, 0, 0.71);
`;

const RowContainer = styled.div`
  width: 100%;
  max-height: 50vh;
  overflow: scroll;
`;

const StyledTable = styled.table`
  width: 100%;

  th {
    font-size: ${theme.textSizes.lg};
    color: ${theme.colors.secondaryTextColor};
  }

  td,
  th {
    border: none;
    border-bottom: 1px solid ${theme.colors.lightGray};
    min-width: 150px;
    max-width: 150px;
  }

  td {
    padding: 1.5rem;
  }

  th {
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

const Table = ({ columns, data }) => {
  const PAGE_SIZES = [5, 15, 25];

  const [pagination, setPagination] = useState({
    currentPage: 1,
    recordsPerPage: 5,
  });

  const lastIndex = pagination.currentPage * pagination.recordsPerPage;
  const firstIndex = lastIndex - pagination.recordsPerPage;

  const paginatedData = useMemo(
    () => data.slice(firstIndex, lastIndex),
    [data, firstIndex, lastIndex]
  );

  return (
    <TableContainer marginBottom={theme.spacings["2xl"]}>
      <StyledTable>
        <thead>
          <tr>
            {columns.map((column, columnIndex) => (
              <th key={columnIndex}>{column.label}</th>
            ))}
          </tr>
        </thead>
      </StyledTable>
      <RowContainer>
        <StyledTable>
          <tbody>
            {data.length === 0 && (
              <tr>
                {columns.map((dataColumn, dataColumnIndex) => (
                  <td key={dataColumnIndex}>
                    {dataColumnIndex === Math.floor(columns.length / 2) && (
                      <NoData data-cy="noData">
                        <FcDeleteDatabase fontSize={120} />
                        <h1>No data to display</h1>
                      </NoData>
                    )}
                  </td>
                ))}
              </tr>
            )}
            {paginatedData.map((row, rowIndex) => (
              <tr key={row.id}>
                {columns.map((dataColumn, dataColumnIndex) => (
                  <td
                    key={dataColumnIndex}
                    style={{
                      borderBottom: `${
                        rowIndex === data.length - 1 && "none"
                      } `,
                    }}
                  >
                    {dataColumn.render
                      ? dataColumn.render(row)
                      : row[dataColumn.dataIndex]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </RowContainer>
      <Pagination
        pagination={pagination}
        setPagination={setPagination}
        listToatal={data.length}
        pageSizes={PAGE_SIZES}
      />
    </TableContainer>
  );
};

export default Table;
