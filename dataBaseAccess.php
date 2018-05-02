<?php
/*
CREATE TABLE ExampleGameStore (
    GSID int PRIMARY KEY NOT null AUTO_INCREMENT,
    gameStoreName varchar(255),
    latitude double,
    longitude double,
    playersAtStore int,
    description text
);
*/

/*
// Items in database "ExampleGameStore"
// API KEY FOR GOOGLE MAPS = AIzaSyBlx94CvcdTa_9PQ2Qgeig2aHPpL2lMsU0

// Example gamesotre in mesquite
INSERT INTO examplegamestore (gameStoreName, latitude, longitude, playersAtStore, description)
VALUES ('FirstGameStore', 36.8055, -114.0672, 15, 'This is the first game store in the database');

// Las vegas
INSERT INTO examplegamestore (gameStoreName, latitude, longitude, playersAtStore, description)
VALUES ('SecondGameStore', 36.8055, -114.0672, 10, 'This game store is in las vegas');

// Little Shope of Magic
INSERT INTO examplegamestore (gameStoreName, latitude, longitude, playersAtStore, description)
VALUES ('Little Shop of Magic', 36.121934, -115.118990, 20, 'This is a game store in Las Vegas. They have stuff to buy and things to do.')
*/




/* Ensure script finished */
echo "dataBaseAccess : Testing";
?>
