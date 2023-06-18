import React from "react";
import styled from "styled-components";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import theme from "../defaultTheme";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 2rem;

  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  li {
    width: max-content;
  }

  button {
    cursor: pointer;
    width: 40px;
  }

  button:disabled {
    cursor: unset;
  }
`;

const NumberButton = styled.button`
  background: transparent;
  border: none;
  color: #000;
  text-decoration: none;
  font-size: ${theme.textSizes.lg};
  margin: 0.5rem;
  font-weight: bold;

  &:hover {
    color: ${theme.colors.primary};
  }

  &.active {
    text-decoration: underline;
    color: ${theme.colors.primary};
  }
`;

const PageSizes = styled.select`
  background: #fff;
  border: 1px solid lightgrey;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

const Pagination = ({
  pagination,
  setPagination,
  listToatal = 0,
  pageSizes,
}) => {
  const { currentPage, recordsPerPage } = pagination;
  const numberOfPages = Math.ceil(listToatal / recordsPerPage);
  const numbersList = [...Array(numberOfPages).keys()]
    .slice(item => item.length)
    .map(key => key + 1);

  const nextPage = () => {
    setPagination({
      currentPage: currentPage + 1,
      recordsPerPage,
    });
  };

  const previousPage = () => {
    setPagination({
      currentPage: currentPage - 1,
      recordsPerPage,
    });
  };

  const changeRecordsPerPage = e => {
    setPagination({
      currentPage,
      recordsPerPage: Number(e.target.value),
    });
  };

  return (
    <PaginationContainer>
      <ul>
        <li>
          <h4>{`No of item: ${listToatal}`}</h4>
        </li>
        <li>
          <button
            type="button"
            onClick={previousPage}
            disabled={currentPage === 1}
          >
            <GrFormPrevious />
          </button>
        </li>
        <li>
          {numbersList.map(number => (
            <NumberButton
              className={number === currentPage ? "active" : ""}
              type="button"
              key={number}
              onClick={() =>
                setPagination({ currentPage: number, recordsPerPage })
              }
            >
              {number}
            </NumberButton>
          ))}
        </li>
        <li>
          <button
            type="button"
            onClick={nextPage}
            disabled={currentPage === numberOfPages}
          >
            <GrFormNext />
          </button>
        </li>
        {pageSizes && (
          <li>
            <PageSizes onChange={changeRecordsPerPage}>
              {pageSizes.map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </PageSizes>
          </li>
        )}
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
