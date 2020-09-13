import React from "react";

import { Descriptions } from "antd";

const MovieDescription = ({ movieData }) => {
  return (
    <Descriptions title={movieData.Title} bordered column={2}>
      <Descriptions.Item label="Title">{movieData.Title}</Descriptions.Item>
      <Descriptions.Item label="Year">{movieData.Year}</Descriptions.Item>
      <Descriptions.Item label="Type">{movieData.Type}</Descriptions.Item>
      <Descriptions.Item label="Released">
        {movieData.Released}
      </Descriptions.Item>
      <Descriptions.Item label="Runtime">{movieData.Runtime}</Descriptions.Item>
      <Descriptions.Item label="Genre">{movieData.Genre}</Descriptions.Item>
      <Descriptions.Item label="Rated">{movieData.Rated}</Descriptions.Item>
      <Descriptions.Item label="Director">
        {movieData.Director}
      </Descriptions.Item>
      <Descriptions.Item label="Writer">{movieData.Writer}</Descriptions.Item>
      <Descriptions.Item label="Actors">{movieData.Actors}</Descriptions.Item>
      <Descriptions.Item label="Plot">{movieData.Plot}</Descriptions.Item>
      <Descriptions.Item label="Language">
        {movieData.Language}
      </Descriptions.Item>
      <Descriptions.Item label="Country">{movieData.Country}</Descriptions.Item>
      <Descriptions.Item label="Awards">{movieData.Awards}</Descriptions.Item>
      <Descriptions.Item label="IMDB Rating">
        {movieData.imdbRating}
      </Descriptions.Item>
      <Descriptions.Item label="IMDB Votes">
        {movieData.imdbVotes}
      </Descriptions.Item>
      <Descriptions.Item label="IMDB Id">{movieData.imdbID}</Descriptions.Item>
    </Descriptions>
  );
};

export default MovieDescription;
