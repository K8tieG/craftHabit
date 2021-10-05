DELETE FROM favorites 
WHERE craft_id =$1;

SELECT
title, time, craft_img, crafts.craft_id
from crafts 
inner join favorites on crafts.craft_id = favorites.craft_id
WHERE user_id =$2;
