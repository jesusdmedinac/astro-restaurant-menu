import { defineDb, defineTable, column } from 'astro:db';

/** 
Categories:

id (INT, Auto_increment, Primary Key)
name (VARCHAR(255))
description (TEXT)
image (VARCHAR(255))*/

const Categories = defineTable({
	columns: {
	  id: column.number({ primaryKey: true }),
	  name: column.text(),
	  description: column.text(),
	  image: column.text(),
	}
})

/**
Dishes:

id (INT, Auto_increment, Primary Key)
name (VARCHAR(255))
description (TEXT)
price (DECIMAL(10,2))
image (VARCHAR(255))
category_id (INT, Foreign Key)
*/
const Dishes = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
		name: column.text(),
		price: column.number(),
		image: column.text(),
		categoryId: column.number({ references: () => Categories.columns.id }),
	}
})

/**
Ingredients:

id (INT, Auto_increment, Primary Key)
name (VARCHAR(255))
DishIngredients:

id (INT, Auto_increment, Primary Key)
dish_id (INT, Foreign Key)
ingredient_id (INT, Foreign Key)
Options:

id (INT, Auto_increment, Primary Key)
name (VARCHAR(255))
description (TEXT)
price (DECIMAL(10,2))
DishOptions:

id (INT, Auto_increment, Primary Key)
dish_id (INT, Foreign Key)
option_id (INT, Foreign Key)
Menus:

id (INT, Auto_increment, Primary Key)
name (VARCHAR(255))
description (TEXT)
start_date (DATE)
end_date (DATE)
MenuDishes:

id (INT, Auto_increment, Primary Key)
menu_id (INT, Foreign Key)
dish_id (INT, Foreign Key)
Allergens:

id (INT, Auto_increment, Primary Key)
name (VARCHAR(255))
DishAllergens:

id (INT, Auto_increment, Primary Key)
dish_id (INT, Foreign Key)
allergen_id (INT, Foreign Key)
Users:

id (INT, Auto_increment, Primary Key)
name (VARCHAR(255))
email (VARCHAR(255))
password (VARCHAR(255))
Orders:

id (INT, Auto_increment, Primary Key)
user_id (INT, Foreign Key)
date (DATE)
time (TIME)
total (DECIMAL(10,2))
status (VARCHAR(255))
OrderDishes:

id (INT, Auto_increment, Primary Key)
order_id (INT, Foreign Key)
dish_id (INT, Foreign Key)
quantity (INT)
price (DECIMAL(10,2))
Favorites:

id (INT, Auto_increment, Primary Key)
user_id (INT, Foreign Key)
dish_id (INT, Foreign Key)
*/

// https://astro.build/db/config
export default defineDb({
	tables: {
		Categories,
		Dishes,
	},
});
