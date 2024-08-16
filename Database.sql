Create database InternShip;
Use InternShip;
CREATE TABLE Account (
	account_id INT IDENTITY(1,1) PRIMARY KEY,
	username VARCHAR(255) UNIQUE NOT NULL,
	password VARCHAR(255) NOT NULL,
	role VARCHAR(255) NOT NULL
);

CREATE TABLE Users (
	user_id INT IDENTITY(1,1) PRIMARY KEY,
	account_id INT NOT NULL,
	full_name VARCHAR(255) NOT NULL,
	phone_number VARCHAR(255) NOT NULL,
	address VARCHAR(255) NOT NULL,
	FOREIGN KEY (account_id) REFERENCES Account(account_id)
);

CREATE TABLE Department (
	department_id INT IDENTITY(1,1) PRIMARY KEY,
	department_name VARCHAR(255) NOT NULL
);

CREATE TABLE Team (
	team_id INT IDENTITY(1,1) PRIMARY KEY,
	team_name VARCHAR(255) NOT NULL,
	department_id INT,
	FOREIGN KEY (department_id) REFERENCES Department(department_id)
);

CREATE TABLE DateReport(
	report_id INT IDENTITY(1,1) PRIMARY KEY,
	user_id INT,
	water_level_area VARCHAR(255),
	date DATE,
	attendance_point BIT,
	personal_equipment_check VARCHAR(255),
	confirm_sign VARCHAR(255),
	imageLink VARCHAR(255),
	FOREIGN KEY (user_id ) REFERENCES Users(user_id )
);

CREATE TABLE MainRubber (
	main_rubber_id INT IDENTITY(1,1) PRIMARY KEY,
	report_id INT,
	lot_name VARCHAR(255),
	nh3_liters FLOAT,
	first_batch_kg FLOAT,
	first_batch_block VARCHAR(255),
	first_batch_stove VARCHAR(255),
	second_batch_kg FLOAT,
	second_batch_block VARCHAR(255),
	second_batch_stove VARCHAR(255),
	scraped_rubber VARCHAR(255),
	FOREIGN KEY (report_id) REFERENCES DateReport(report_id)
);

CREATE TABLE SecondaryRubber (
	secondary_rubber_id INT IDENTITY(1,1) PRIMARY KEY,
	report_id INT,
	lot_name VARCHAR(255),
	frozen_kg FLOAT,
	stew_kg FLOAT,
	wire_kg FLOAT,
	total_harvest_kg FLOAT,
	FOREIGN KEY (report_id) REFERENCES DateReport(report_id)
);

CREATE TABLE ReceptionReport (
	reception_report_id INT IDENTITY(1,1) PRIMARY KEY,
    user_id INT,
    content VARCHAR(255),
    cream_latex_kg FLOAT,
    block_latex_kg FLOAT,
    sheet_latex_kg FLOAT,
    frozen_latex_kg FLOAT,
    cup_latex_kg FLOAT,
    wire_latex_kg FLOAT,
    total_harvest_latex_kg FLOAT,
    FOREIGN KEY (user_id ) REFERENCES Users(user_id )
    );

INSERT INTO Account (username, password, role)
VALUES 
('admin', 'adminpassword', 'Administrator'),
('user01', 'user01password', 'User'),
('user02', 'user02password', 'User'),
('moderator', 'moderatorpassword', 'Moderator');

INSERT INTO Users (account_id, full_name, phone_number, address)
VALUES 
('1', 'Nguyen Van A', '0909123456', '123 Le Loi, Ho Chi Minh City'),
('2','Tran Thi B', '0912233445', '456 Tran Hung Dao, Ho Chi Minh City'),
('3', 'Le Van C', '0988776655', '789 Nguyen Hue, Ho Chi Minh City');

select * from DateReport