-- Assignment: [lab] Selecting Edit Next Module
-- Using the SQL Lab tool: https://sql-lab.herokuapp.com/
-- Write the following SQL Queries:
-- From the students table:

-- Select the first 10 students whose ages are between 35 and 45.
  SELECT *
  FROM students
  WHERE age BETWEEN 35 AND 45
  LIMIT 10;

-- Select the third set of 10 students whose ages are more than 25 and whose first names contain `th`. The students must be ordered by their id then first name in a descending order.
  SELECT *
  FROM students
  WHERE age > 25 AND first_name ILIKE '%th%'
  ORDER BY id, first_name
  DESC
  LIMIT 10 OFFSET 20 ROWS;

  SELECT *
  FROM students
  WHERE age > 25 AND first_name ILIKE '%th%'
  ORDER BY id, first_name
  DESC
  LIMIT 10 OFFSET 20;

-- Select the 10 oldest students (You should ignore students with an age that is `NULL`).
  SELECT *
  FROM students
  ORDER BY age DESC
  LIMIT 10;

  SELECT *
  FROM students
  WHERE age IS NOT NULL
  ORDER BY age DESC
  LIMIT 10;

-- Select all students with age 45 whose last names contain the letter n.
  SELECT *
  FROM students
  WHERE age = 45 AND last_name ILIKE '%n%';

-- From the products table:
-- Select all the products that are on sale.
  SELECT *
  FROM products
  WHERE price > sale_price;

-- Select all the products that are on sale and have remaining items in stock ordered by the sale price in ascending order.
  SELECT *
  FROM products
  WHERE price > sale_price AND remaining_quantity > 0
  ORDER BY sale_price ASC;

-- Select all the products priced between 25 and 50 (regular price) and that are on sale.
  SELECT *
  FROM products
  WHERE price BETWEEN 25 AND 50 AND price > sale_price;
