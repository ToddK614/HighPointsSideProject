USE master
GO

-- Drop database if it exists
IF DB_ID('final_capstone') IS NOT NULL
BEGIN
	ALTER DATABASE final_capstone SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
	DROP DATABASE final_capstone;
END

CREATE DATABASE final_capstone
GO

USE final_capstone
GO

-- Create Tables
CREATE TABLE users (
	user_id int IDENTITY(1,1) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	salt varchar(200) NOT NULL,
	user_role varchar(50) NOT NULL
	CONSTRAINT PK_user PRIMARY KEY (user_id)
)

-- Populate default data for testing: user and admin with password of 'password'
-- These values should not be kept when going to Production
INSERT INTO users (username, password_hash, salt, user_role) VALUES ('user','Jg45HuwT7PZkfuKTz6IB90CtWY4=','LHxP4Xh7bN0=','user');
INSERT INTO users (username, password_hash, salt, user_role) VALUES ('admin','YhyGVQ+Ch69n4JMBncM4lNF/i9s=', 'Ar/aB2thQTI=','admin');
GO

CREATE TABLE state_high_points (
	high_point_id int IDENTITY (1,1) NOT NULL,
	state_abbreviation nvarchar(2) NOT NULL,
	state_name nvarchar (50) NOT NULL,
	hp_name nvarchar (100) NOT NULL,
	hp_elevation_ft int NOT NULL,
	hp_rank int NOT NULL,
	hp_latitude nvarchar (15) NOT NULL,
	hp_longitude nvarchar (15) NOT NULL,
	CONSTRAINT [PK_state_high_points] PRIMARY KEY (state_abbreviation)
	
)

INSERT INTO state_high_points (state_abbreviation, state_name, hp_name, hp_elevation_ft, hp_rank, hp_latitude, hp_longitude) VALUES 
('AL', 'Alabama','Cheaha Mountain',2405, 38, '33.4854', '-85.8086'),
('AK', 'Alaska', 'Denali',20310, 1, '63.0690', '-151.0063'),
('AS', 'American Samoa', 'Lata Mountain', 3169, 36, '-14.2331', '-169.4543'),
('AZ', 'Arizona', 'Humphrey''s Peak', 12637, 12, '35.3464', '-111.6780'),
('AR', 'Arkansas', 'Mount Magazine', 2753, 37, '36.1671', '-93.6447'),
('CA', 'California', 'Mount Whitney', 14505, 2, '36.5786', '-118.2924'),
('CO', 'Colorado', 'Mount Elbert', 14440, 3, '39.1178', '-106.4453')


SELECT * FROM state_high_points
--SELECT high_point_id, state_abbreviation, state_name, hp_name, hp_elevation_ft, hp_rank, hp_latitude, hp_longitude FROM state_high_points