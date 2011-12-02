-- Document Schema
drop table files if exists cascade;
create table documents(
	ID varchar(50) not null primary key,
	FILE_PATH varchar(2000) not null,
	ORIGIN_NAME varchar(50) not null,
	FILE_TYPE varchar(50) not null,
	FILE_SIZE int not null,
	UPLOADER varchar(50) not null,
	UPLOAD_TIME timestamp not null);

