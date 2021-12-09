CREATE TABLE IF NOT EXISTS moviesTable(
    id INTEGER PRIMARY KEY,
    posterURL TEXT,
    adult INTEGER,
    overview TEXT,
    releaseDate TEXT,
    genres TEXT,
    title TEXT,
    lang TEXT,
    backdropURL TEXT,
    popularity INTEGER,
    voteCnt INTEGER,
    video INTEGER,
    voteAvg INTEGER,
    userWatchStatus TEXT,
    userRating INTEGER
);

INSERT or IGNORE INTO moviesTable VALUES (343611, '/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg', 0, 'Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.','2016-10-19','53,28,80,18,9648','Jack Reacher: Never Go Back','en','/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg',26.818468,201,0,4.19,'',-1);