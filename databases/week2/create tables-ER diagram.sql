-- Part 4-ER diagram -- creating tables

CREATE TABLE `customers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
   `user_name` varchar(255) NULL
) 

CREATE TABLE `products` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `price` int(10) unsigned NOT NULL
)


CREATE TABLE `orders` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `amount` int(10) NOT NULL,
  `customer_id` int(10) unsigned NOT NULL
   `product_id` int(10) unsigned NOT NULL
  CONSTRAINT `fk_customers` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`)
  CONSTRAINT `fk_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
)

CREATE TABLE `payments` (
`order_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`payment_status` varchar(255) NOT NULL,
 CONSTRAINT `fk_order` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`)
  
)

CREATE TABLE `delivery` (
`order_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `delivery_status` varchar(255) NOT NULL,
   CONSTRAINT `fk_order` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`)
)

  
  