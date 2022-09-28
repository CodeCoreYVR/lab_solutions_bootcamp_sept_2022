-- Assignment: [lab] Aggregate Functions Edit Next Module
-- Using SQL Lab tool: https://sql-lab.herokuapp.com/

-- Write the following SQL Queries:
-- From the students table:

-- Find the number of students named 'Milton'.
  SELECT *
  FROM students
  WHERE first_name ILIKE 'milton' OR last_name ILIKE 'milton';

-- List the `first_name`s that occur more than once in students, with the number occurrences of that name.
  SELECT first_name, COUNT(first_name) AS name_occurrences
  FROM students
  HAVING COUNT(first_name) > 1
  GROUP BY first_name

-- Refine the above query to list the 20 most common first_names among students, in order first of how common they are, and alphabetically when names have the same count.
  SELECT first_name, COUNT(first_name) AS name_occurrences
  FROM students
  GROUP BY first_name
  ORDER BY name_occurrences DESC, first_name
  LIMIT 20;

-- From the products table:
-- Find the most expensive product.
  SELECT *
  FROM products
  ORDER BY price
  DESC LIMIT 1;

  SELECT name, MAX(price) AS most_expensive
  FROM products
  GROUP BY name
  ORDER BY most_expensive DESC
  LIMIT 1;

-- Find the cheapest product that is on sale.
  SELECT *
  FROM products
  WHERE price > sale_price
  ORDER BY price
  ASC LIMIT 1;

  SELECT name, MIN(sale_price) AS cheapest
  FROM products
  WHERE price > sale_price
  GROUP BY name
  ORDER BY cheapest
  LIMIT 1;

-- Find the total value of all inventory in stock (use sale price).
  SELECT name, SUM(sale_price * remaining_quantity) AS total_value
  FROM products
  GROUP BY name
  ORDER BY total_value
  DESC

  SELECT SUM(sale_price * remaining_quantity) AS total_value
  FROM products
