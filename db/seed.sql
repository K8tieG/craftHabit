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
  materials TEXT default NULL,
  tools TEXT default NULL,
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
  ('test@test.net','12345'),
  ('bananas@gmail.com','pizza'),
  ('maecenas.iaculis@nonlorem.com','arcu.'),
  ('dis.parturient@vestibulumnec.net','nulla'),
  ('mollis.non.cursus@dolor.com','eget');

INSERT INTO crafts (title,time,type,materials,tools,instructions,craft_img)
VALUES
  ('Plant Hanger',25,'macrame','8, 3-yard pieces of 3mm macrame cord, 2 1-yard pieces of macrame cord, Wooden Ring','Scissors','Step 1.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit. Step 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Step 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ','https://images.unsplash.com/photo-1616897407035-9148edf7dfc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80'),
  ('Pom Pom Garland',20,'yarn','One spool of yarn','Scissors, Measuring tape','Step 1.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit. Step 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Step 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ','https://images.unsplash.com/photo-1528753048379-09010ddb8820?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'),
  ('Wire Earrings',30,'jewelry','Brass wire, Scrap wood, Earring hooks, Small wire brads, Masking tape, Paper leaf template','Hammer, Round-nose pliers, Flat-nose jewelry pliers, Wirecutters, Scissors','Step 1. Tape leaf template to a piece of wood, hammer brads into the wood where the outline bends, turns or curves. Step 2.Starting in the middle, bend the wire around the brads keeping as close to the outline as you can. Step 3. Once the wire is completely around the template, gently pull it off. Step 4. Use your flat-nose pliers to shape it. Step 5. When you’re happy with your leaf shape, cut the wire, and wrap the cut end around the bottom to secure it. Step 6. Repeat step 1-5 to create a second leaf. Step 7. Use your needle-nose pliers to loop the other end of the wire into a loop, then cut it. Step 8. Attach earring wires to the loop, and admire your great work.','https://images.unsplash.com/photo-1553926297-57bb350c4f08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'),
  ('Draw a Mountain',15,'drawing','Pencil, Paper','None','Step 1.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit. Step 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Step 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ','https://images.unsplash.com/photo-1598408104280-9a4f0137ad7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'),
  ('Embroider a t-shirt',20,'embroidery','Needle, Embroidery thread, T-shirt','Scissors','Step 1.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit. Step 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Step 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit.','https://images.unsplash.com/photo-1592169138776-7c9211066fc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'),
  ('Lucky Paper Star',10,'origami','Paper','Scissors, Ruler','Step 1.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit. Step 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Step 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit.','https://images.freeimages.com/images/large-previews/b3b/paper-stars-1198423.jpg'),
  ('Crochet a Pot Holder', 35, 'crochet', '1 skein of yarn, Size H crochet hook','Scissors', 'Step 1.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit. Step 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Step 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit.', 'https://images.unsplash.com/photo-1475578749612-705fc64d0574?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80');
