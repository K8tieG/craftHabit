-- drop all tables

-- create all tables-- can alter tables in create 

--alter tables 

--insert into tables 

-- this will add dummy data to https://pgweb-demo.herokuapp.com/ google data generator that spits out postgres database series 

DROP TABLE IF EXISTS "users", "crafts", "favorites";

CREATE TABLE "users" (
  user_id SERIAL PRIMARY KEY,
  email varchar(255) default NULL,
  password TEXT default NULL
);

CREATE TABLE "crafts" (
  craft_id SERIAL PRIMARY KEY,
  title TEXT default NULL,
  time integer NULL,
  type TEXT default NULL,
  supplies TEXT default NULL,
  instructions TEXT default NULL,
  craft_img TEXT default NULL
);

CREATE TABLE "favorites" (
  favorites_id SERIAL PRIMARY KEY,
  user_id SERIAL,
  craft_id SERIAL,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (craft_id) REFERENCES crafts(craft_id)
);

INSERT INTO users (email,password)
VALUES
  ('porttitor.eros.nec@urnanunc.net','laoreet'),
  ('nascetur.ridiculus@etmagnis.edu','egestas.'),
  ('maecenas.iaculis@nonlorem.com','arcu.'),
  ('dis.parturient@vestibulumnec.net','nulla'),
  ('mollis.non.cursus@dolor.com','eget');

INSERT INTO crafts (title,time,type,supplies,instructions,craft_img)
VALUES
  ('Aliquam nisl. Nulla',5,'Mauris','lobortis mauris. Suspendisse aliquet','ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis','https://www.freeimages.com/photo/tropical-bird-1390996'),
  ('Nulla semper tellus',10,'senectus','eu, ligula. Aenean euismod','diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus','https://www.freeimages.com/photo/tropical-bird-1390996'),
  ('volutpat nunc sit',15,'auctor','a neque.','Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue','https://www.freeimages.com/photo/tropical-bird-1390996'),
  ('dapibus gravida. Aliquam',20,'dapibus','sit amet','arcu. Vestibulum ante ipsum primis in faucibus','https://www.freeimages.com/photo/tropical-bird-1390996'),
  ('non, hendrerit id,',25,'lacus,','Phasellus','ultrices. Duis volutpat nunc sit amet metus. Aliquam','https://www.freeimages.com/photo/tropical-bird-1390996');


