-- To run lab ender:
    -- $ psql-d sql_lab -f L1Queries1.sql

-- [Lab] Queries 1

-- Write the following SQL Queries:

-- 1.    Find the average line_item total price (meaning quantity * price) for 
--       each order that were completed in January 2016 month.
--------------------------- 1st Solution ---------------------------
-- SELECT order_id,
--        completed_on,
--        average_price
-- FROM (
--        SELECT line_items.order_id,
--               orders.completed_on, 
--               AVG(line_items.quantity * line_items.price) AS average_price
--        FROM line_items
--        INNER JOIN orders ON line_items.order_id = orders.id
--        GROUP BY line_items.order_id, orders.completed_on
--      ) AS product_average_price
-- WHERE completed_on BETWEEN '2016-01-01' AND '2016-02-01';
--------------------------- 2nd Solution --------------------------- 
 SELECT line_items.order_id, AVG(line_items.price * line_items.quantity) AS average_price
 FROM orders
 INNER JOIN line_items ON orders.id = line_items.order_id
 WHERE orders.completed_on >= '2016-01-01' AND orders.completed_on < '2016-02-01'
 GROUP BY line_items.order_id
 ORDER BY line_items.order_id;
--------------------------------------------------------------------



-- 2.    Select product names, product prices and the lowest price they were 
--       sold at during the last 50 months.


SELECT products.name, products.price, MIN(line_items.price)as lowest_price
FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON orders.id = line_items.order_id
WHERE orders.completed_on >= '2016-01-01' AND orders.completed_on < '2021-03-01'
GROUP BY products.id;

-- [Note] the total price in the line_items table is price per unit and not total price.