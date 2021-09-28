-- sql queries go here

--this gives us all of the users that have a sepecific email
SELECT * from users
WHERE email = $1