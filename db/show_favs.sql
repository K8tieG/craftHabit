SELECT
title, time, craft_img
from crafts 
inner join favorites on crafts.craft_id = favorites.craft_id
WHERE user_id =$1;