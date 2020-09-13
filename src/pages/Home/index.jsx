import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Table, Input, Select, message } from "antd";

import {
  getMoviesSuccessAction,
  getMoviesStartAction,
} from "../../redux/movies/actions";
import { columns } from "../../constants/columns";
import { API_URL, API_KEY } from "../../constants/api";
import { Header, SearchContainer } from "./styles";

const { Search } = Input;
const { Option } = Select;

const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector;
  const history = useHistory();

  const movies = selector((state) => state.movies.moviesList);

  const [pagination, setPagination] = useState({
    current: 1,
    simple: true,
    position: ["bottomCenter"],
  });
  const loading = selector((state) => state.movies.moviesLoading);

  const [searchValue, setSearchValue] = useState("Pokemon");
  const [inputValue, setInputValue] = useState("Pokemon");

  const [year, setYear] = useState(null);
  const [inputYear, setInputYear] = useState(null);

  const [type, setType] = useState(null);

  const fetchMovies = (url) => {
    dispatch(getMoviesStartAction());
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getMoviesSuccessAction(data.Search));
        setPagination({ ...pagination, total: data.totalResults });
        if (data.Response === "False") {
          message.error(data.Error);
        }
      });
  };

  useEffect(() => {
    fetchMovies(
      API_URL +
        "/?s=" +
        searchValue +
        "&page=" +
        pagination.current +
        "&y=" +
        year +
        "&type=" +
        type +
        "&apikey=" +
        API_KEY
    );
  }, [pagination.current, searchValue, year, type]);

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  const handleSearch = (value) => {
    setPagination({ ...pagination, current: 1 });
    setSearchValue(value);
  };

  const handleYearSearch = (value) => {
    setPagination({ ...pagination, current: 1 });
    setYear(value);
  };

  const handleTypeSearch = (value) => {
    setPagination({ ...pagination, current: 1 });
    setType(value);
  };

  return (
    <>
      <Header>
        <SearchContainer>
          <div style={{ margin: "12px", fontWeight: "500" }}>Search:</div>
          <Search
            placeholder="Search"
            onSearch={handleSearch}
            enterButton
            loading={loading}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </SearchContainer>
        <SearchContainer>
          <div style={{ margin: "12px", fontWeight: "500" }}>Year:</div>
          <Search
            placeholder="Enter a year"
            onSearch={handleYearSearch}
            enterButton
            loading={loading}
            value={inputYear}
            onChange={(e) => {
              setInputYear(e.target.value);
            }}
            allowClear
          />
        </SearchContainer>
        <SearchContainer>
          <div style={{ margin: "12px", fontWeight: "500" }}>Type:</div>
          <Select
            defaultValue=""
            style={{ width: 120 }}
            onChange={handleTypeSearch}
          >
            <Option value="movie">Movie</Option>
            <Option value="series">Series</Option>
            <Option value="game">Game</Option>
            <Option value="">All</Option>
          </Select>
        </SearchContainer>
      </Header>

      <Table
        columns={columns}
        rowKey={(record) => record.imdbID}
        dataSource={movies}
        pagination={pagination}
        onChange={handleTableChange}
        loading={loading}
        rowClassName={"row"}
        onRow={(record) => {
          return {
            onClick: (_) => {
              history.push("/detail/" + record.imdbID);
            },
          };
        }}
      />
    </>
  );
};

export default Home;
