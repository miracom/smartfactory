insert into groups(group_name) values
	('Users');
insert into groups(group_name) values
	('Administrators');

insert into group_authorities(group_id, authority) 
	select id, 'ROLE_USER' from groups where group_name='Users';
insert into group_authorities(group_id, authority) 
	select id, 'ROLE_USER' from groups where group_name='Administrators';
insert into group_authorities(group_id, authority)
	select id, 'ROLE_ADMIN' from groups where group_name='Administrators';

insert into users(username, password, enabled) values
	('admin','admin',true);
insert into users(username, password, enabled) values
	('guest','guest',true);
	
insert into group_members(group_id, username) 
	select id, 'guest' from groups where group_name='Users'
insert into group_members(group_id, username)
	select id, 'admin' from groups where group_name='Administrators'

--insert into authorities(username,authority) values
--	('admin','ROLE_USER');
--insert into authorities(username,authority) values
--	('admin','ROLE_ADMIN');
--insert into authorities(username,authority) values
--	('guest','ROLE_USER');
	
commit;
