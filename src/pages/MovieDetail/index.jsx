import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Image, Skeleton, message } from "antd";

import {
  getMovieDetailsSuccessAction,
  getMovieDetailsStartAction,
} from "../../redux/moviedetails/actions";
import MovieDescription from "../../components/MovieDescription";
import { API_URL, API_KEY } from "../../constants/api";
import { Container, DescriptionContainer } from "./styles";

const MovieDetail = () => {
  const selector = useSelector;
  const dispatch = useDispatch();

  const { imdbId } = useParams();

  const movieData = selector((state) => state.moviedetails.movieData);
  const loading = selector((state) => state.moviedetails.movieDetailsLoading);

  useEffect(() => {
    dispatch(getMovieDetailsStartAction());
    fetch(API_URL + "/?i=" + imdbId + "&apikey=" + API_KEY)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getMovieDetailsSuccessAction(data));
        if (data.Response === "False") {
          message.error(data.Error);
        }
      });
  }, [imdbId]);

  return (
    movieData && (
      <Container>
        <Skeleton loading={loading} active avatar paragraph={{ rows: 16 }}>
          <Image style={{ margin: "48px 0" }} src={movieData.Poster} />
          <DescriptionContainer>
            <MovieDescription movieData={movieData} />
          </DescriptionContainer>
        </Skeleton>
      </Container>
    )
  );
};

export default MovieDetail;
