CREATE TABLE IF NOT EXISTS moviesTable(
    id INTEGER PRIMARY KEY,
    title TEXT,
    posterURL TEXT,
    overview TEXT,
    adult INTEGER,
    backdropURL TEXT,
    genres TEXT,
    homepage TEXT,
    lang TEXT,
    popularity INTEGER,
    releaseDate TEXT,
    revenue INTEGER,
    runtime INTEGER,
    tagline TEXT,
    video INTEGER,
    voteAvg INTEGER,
    voteCnt INTEGER,
    userWatchStatus TEXT,
    userRating INTEGER
);
INSERT
    or IGNORE INTO moviesTable
VALUES (
        343611,
        'Jack Reacher: Never Go Back',
        '/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg',
        'Jack Reacher must uncover the truth.',
        0,
        '/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg',
        '53,28,80,18,9648',
        '',
        'en',
        26.818468,
        '2016-10-19',
        200000,
        1000,
        'this is a tagline',
        0,
        4.19,
        201,
        '',
        -1
    );