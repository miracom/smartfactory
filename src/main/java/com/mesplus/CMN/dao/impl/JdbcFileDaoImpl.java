package com.mesplus.CMN.dao.impl;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import com.mesplus.CMN.dao.FileDao;
import com.mesplus.CMN.model.File;

@Component
public class JdbcFileDaoImpl implements FileDao {
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	@Autowired
	@Qualifier("fileDataSource")
	public void setDataSource(DataSource dataSource) {
		namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	@Override
	public void create(File file) {
		MapSqlParameterSource namedParameters = new MapSqlParameterSource();

		namedParameters.addValue("id", file.getId());
		namedParameters.addValue("file_path", file.getFile_path());
		namedParameters.addValue("origin_name", file.getOrigin_name());
		namedParameters.addValue("file_type", file.getFile_type());
		namedParameters.addValue("file_size", file.getFile_size());
		namedParameters.addValue("uploader", file.getUploader());
		namedParameters.addValue("upload_time", file.getUpload_time());

		namedParameterJdbcTemplate
				.update("INSERT INTO FILE (ID, FILE_PATH, ORIGIN_NAME, FILE_TYPE, FILE_SIZE, UPLOADER, UPLOAD_TIME) VALUES(:id, :file_path, :origin_name, :file_type, :file_size, :uploader, :upload_time)",
						namedParameters);
	}

	@Override
	public void delete(String id) {
		String sql = "DELETE FROM FILES WHERE ID=:id";

		MapSqlParameterSource namedParameters = new MapSqlParameterSource();
		namedParameters.addValue("id", id);

		namedParameterJdbcTemplate.update(sql, namedParameters);
	}

	@Override
	public List<File> select(String[] ids) {

		String sql = "SELECT * FROM FILES WHERE ID IN (:ids)";

		MapSqlParameterSource namedParameters = new MapSqlParameterSource();
		namedParameters.addValue("ids", ids);

		return namedParameterJdbcTemplate.queryForList(sql, namedParameters, File.class);
	}

	@Override
	public File find(String id) {
		String sql = "SELECT * FROM FILES WHERE ID=:id";

		MapSqlParameterSource namedParameters = new MapSqlParameterSource();
		namedParameters.addValue("id", id);

		return namedParameterJdbcTemplate.queryForObject(sql, namedParameters, File.class);
//		return this.namedParameterJdbcTemplate.queryForObject(sql, namedParameters, new RowMapper<File>() {
//			@Override
//			public File mapRow(ResultSet rs, int rowNum) throws SQLException {
//				File file = new File();
//
//				file.setId(rs.getString("ID"));
//				file.setFile_path(rs.getString("FILE_PATH"));
//				file.setOrigin_name(rs.getString("ORIGIN_NAME"));
//				file.setFile_type(rs.getString("FILE_TYPE"));
//				file.setFile_size(rs.getInt("FILE_SIZE"));
//				file.setUploader(rs.getString("UPLOADER"));
//				file.setUpload_time(rs.getTimestamp("UPLOAD_TIME"));
//
//				return file;
//			}
//		});
	}
}
