-- Query Schema
drop table queries if exists cascade;
create table queries(
	factory varchar(50) not null,
	queryid varchar(50) not null,
	statement varchar(50) not null,
	commandtype varchar(50) not null,
	description varchar(256),
	commandtimeout number(4) not null,
	commandtext varchar(4000) not null);
create unique index ix_qry_factory_queryid on queries (factory, queryid);

drop table query_params if exists cascade;
create table query_params (
	factory varchar(50) not null,
	queryid varchar(50) not null,
	name varchar(50) not null,
	pvalue varchar(256),
	direction varchar(50) not null,
	dbtype varchar(50) not null,
	param_size number(4) not null,
	param_idx number(4) not null);
create unique index ix_qparam_query_name on query_params (factory, queryid, name);
