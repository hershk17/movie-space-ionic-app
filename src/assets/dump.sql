-- DROP TABLE moviesTable;
CREATE TABLE IF NOT EXISTS moviesTable(
    id INTEGER PRIMARY KEY,
    title TEXT,
    posterURL TEXT,
    overview TEXT,
    backdropURL TEXT,
    budget INTEGER,
    genres TEXT,
    homepage TEXT,
    lang TEXT,
    releaseDate TEXT,
    revenue INTEGER,
    runtime INTEGER,
    voteAvg INTEGER,
    voteCnt INTEGER
);