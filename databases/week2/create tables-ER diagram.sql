-- Part 4-ER diagram -- creating tables

CREATE TABLE `customer` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
   `user_name` varchar(255) NULL
) 

CREATE TABLE `product` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `price` int(10) unsigned NOT NULL
)


CREATE TABLE `order` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `amount` int(10) NOT NULL,
  `customer_id` int(10) unsigned NOT NULL
  CONSTRAINT `fk_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`)
)

CREATE TABLE `payment` (
`order_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `payment_status` varchar(255) NOT NULL,
   CONSTRAINT `fk_order` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`)
)

CREATE TABLE `delivery` (
`order_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `delivery_status` varchar(255) NOT NULL,
   CONSTRAINT `fk_order` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`)
)

  
  