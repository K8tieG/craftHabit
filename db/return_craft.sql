--this gives us all of the crafts that have a sepecific time and type 
SELECT * from crafts 
WHERE time = $1 
AND type = $2;

