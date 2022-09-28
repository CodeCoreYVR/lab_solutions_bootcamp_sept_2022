-- Assignment: Queries Edit Next Module
-- Using the SQL Lab tool: https://sql-lab.herokuapp.com/
-- Write the following SQL Queries:
-- For the products table:

-- 1. Select the product whose stock has the most value (use sale price)
  SELECT name, SUM(sale_price * remaining_quantity) AS total_value
  FROM products
  GROUP BY name
  ORDER BY total_value
  DESC
  LIMIT 1;

  SELECT *
  FROM products
  where sale_price * remaining_quantity = (
    SELECT MAX(sale_price * remaining_quantity)
    FROM products
  );

-- 2. Select the most expensive product whose price is between 25 and 50 with remaining quantity
  SELECT *
  FROM products
  WHERE price BETWEEN 25 AND 50 AND remaining_quantity > 0
  ORDER BY price DESC
  LIMIT 1;

-- 3. Select all products on sale with remaining quantity ordered by their price and then their name
  SELECT *
  FROM products
  WHERE price > sale_price AND remaining_quantity > 0
  ORDER BY price, name;

-- 4. Select the second set 20 results based on the previous query
  SELECT *
  FROM products
  WHERE price > sale_price AND remaining_quantity > 0
  ORDER BY price, name
  LIMIT 20 OFFSET 20;

-- 5. Find the average price of all products
  SELECT AVG(price) AS average_price
  FROM products;

-- 6. Find the average price of all products that are on sale
  SELECT ROUND(AVG(price)) AS average_price
  FROM products
  WHERE price > sale_price;

-- 7. Find the average price of all products that are on sale with remaining quantity
  SELECT ROUND(AVG(price)) AS average_price
  FROM products
  WHERE sale_price < price AND remaining_quantity > 0;

-- 8. Update all the products whose name contains `paper` (case insensitive) to have a remaining quantity of 0
  UPDATE products
  SET remaining_quantity = 0
  WHERE name ILIKE '%paper%';

  SELECT * FROM products WHERE name ILIKE '%paper%'

-- 9. Is it possible to revert the query in question 8?
  SELECT *
  FROM products
  WHERE name ILIKE '%paper%';
  ROLLBACK WORK;

-- 10. Update all the products whose name contains `paper` or `steel` to have a remaining quantity of a random number between 5 and 25
  UPDATE products
  SET remaining_quantity = (RANDOM() * 20 + 5)
  WHERE name ILIKE '%paper%' OR name ILIKE '%steel%';

  SELECT * FROM products WHERE name ILIKE '%paper%' OR name ILIKE '%steel%';

-- 11. Select the second set of 10 cheapest products with remaining quantity
  SELECT * FROM products
  WHERE remaining_quantity > 0
  ORDER BY sale_price
  ASC
  LIMIT 10
  OFFSET 10;

  SELECT name, MIN(sale_price) AS cheapest
  FROM products
  WHERE remaining_quantity > 0
  GROUP BY name
  ORDER BY cheapest
  LIMIT 10
  OFFSET 10;

-- 12. Build a query that groups the products by their sale price and show the number of products in that price and the sum of remaining quantity. Label the count `product_count`
  SELECT COUNT(sale_price) AS product_count, SUM(remaining_quantity) AS sum_of_remaining
  FROM products
  GROUP BY sale_price;

-- 13. [stretch] Update the most expensive product to have double its quantity in a single query
  UPDATE products
  SET remaining_quantity = (
    SELECT remaining_quantity
    FROM products
    WHERE remaining_quantity > 0
    ORDER BY price
    DESC
    LIMIT 1)*2
  WHERE id = (
    SELECT id
    FROM products
    WHERE remaining_quantity > 0
    ORDER BY price
    DESC
    LIMIT 1);

  UPDATE products
  SET price = price * 2
  WHERE price = (SELECT MAX(price)
  FROM products);
