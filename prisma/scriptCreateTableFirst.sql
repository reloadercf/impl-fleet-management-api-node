CREATE TABLE trajectories (
    id SERIAL PRIMARY KEY,
    taxi_id INT REFERENCES taxis(id),
    date TIMESTAMP,
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION
);