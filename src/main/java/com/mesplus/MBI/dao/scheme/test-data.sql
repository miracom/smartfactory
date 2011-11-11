insert into queries(factory, queryid, statement, commandtype, description, commandtimeout, commandtext) values
('FAB', 'VIEW_GCMDATA_LIST', 'Select', 'Text', '공장의 GCM 정보 가져오기', 60, 
'SELECT * FROM MGCMTBLDAT WHERE FACTORY=:FACTORY AND TABLE_NAME=:TABLE_NAME'
);

insert into query_params(factory, queryid, name, pvalue, direction, dbtype, param_size, param_idx) values
('FAB', 'VIEW_GCMDATA_LIST', ':FACTORY', 'FAB', 'Input', 'VarChar', 10, 1);

insert into query_params(factory, queryid, name, pvalue, direction, dbtype, param_size, param_idx) values
('FAB', 'VIEW_GCMDATA_LIST', ':TABLE_NAME', 'MATERIAL_GRP_1', 'Input', 'VarChar', 20, 1);

insert into queries(factory, queryid, statement, commandtype, description, commandtimeout, commandtext) values
('FAB', 'VIEW_MATERIAL_LIST', 'Select', 'Text', '공장의 MATERIAL 정보 가져오기', 60, 
'SELECT DISTINCT MAT_ID, MAT_DESC FROM MWIPMATDEF'
);

delete from query_params;

select * from QUERY_PARAMS;

select * from QUERIES;


SELECT Q.FACTORY, Q.QUERYID, Q.STATEMENT, Q.COMMANDTYPE, Q.DESCRIPTION, Q.COMMANDTIMEOUT, 
Q.COMMANDTEXT, QP.NAME, QP.PVALUE, QP.DIRECTION, QP.DBTYPE, QP.PARAM_SIZE, QP.PARAM_IDX 
FROM QUERIES Q, QUERY_PARAMS QP 
WHERE Q.FACTORY='FAB' 
AND Q.FACTORY=QP.FACTORY 
AND Q.QUERYID=QP.QUERYID 
ORDER BY Q.QUERYID 


SELECT Q.FACTORY, Q.QUERYID, Q.STATEMENT, Q.COMMANDTYPE, Q.DESCRIPTION, Q.COMMANDTIMEOUT, Q.COMMANDTEXT, QP.NAME, QP.PVALUE, QP.DIRECTION, QP.DBTYPE, QP.PARAM_SIZE, QP.PARAM_IDX 
FROM QUERIES Q, QUERY_PARAMETERS QP WHERE Q.FACTORY=? AND Q.FACTORY=QP.FACTORY AND Q.QUERYID=QP.QUERYID ORDER BY Q.QUERYID

SELECT Q.FACTORY FACTORY, Q.QUERYID QUERYID, Q.STATEMENT STATEMENT, Q.COMMANDTYPE COMMANDTYPE, Q.DESCRIPTION DESCRIPTION, Q.COMMANDTIMEOUT COMMANDTIMEOUT, Q.COMMANDTEXT COMMANDTEXT,
				QP.NAME NAME, QP.PVALUE PVALUE, QP.DIRECTION DIRECTION, QP.DBTYPE DBTYPE, QP.PARAM_SIZE PARAM_SIZE, QP.PARAM_IDX PARAM_IDX 
		FROM QUERIES Q
			LEFT OUTER JOIN QUERY_PARAMS QP ON Q.FACTORY = QP.FACTORY AND Q.QUERYID = QP.QUERYID
		WHERE Q.FACTORY='FAB' AND Q.QUERYID='VIEW_MATERIAL_LIST'
		ORDER BY Q.QUERYID
		
		
 
Password 암호화 코딩
//사용예
COM_encpypt_one_way(s_encode_password, s_password, sizeof(MSECUSREXT.ENCODE_PASSWORD), s_user_id, sizeof(MSECUSREXT.USER_ID));
if(memcmp(MSECUSREXT.ENCODE_PASSWORD, s_encode_password, sizeof(MSECUSREXT.ENCODE_PASSWORD)) != 0)
/*******************************************************************************
    COM_encpypt_one_way()
        generate encorded password
    Arguments
        d:encorded result
        s:source password
        s_size:source size
        p:user id
        p_size:user id size
********************************************************************************/
int COM_encpypt_one_way(char *d, char *s, int s_size, char *p, int p_size)
{
    int i,j;
    int t;
    char x[12];
    memcpy(x, "aA!dD$jJ*zZ+", 12);
    j = 0;
    for( i = 0 ; i < s_size ; i++ )
    {
        j = j + (int)(*(s+i));
    }
    j = j % 87;
    for( i = 0 ; i < s_size ; i++ )
    {
        t = (int)(*(s+i)) * (int)(*(p+ (i%p_size) )) * (int)x[i%12] + j;
        *(d+i) = (char)( t%95 + 32 );
    }
    return TRUE;
}
 