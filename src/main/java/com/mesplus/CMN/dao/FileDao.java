package com.mesplus.CMN.dao;

import java.util.List;

import com.mesplus.CMN.model.File;

public interface FileDao {
	public void create(File file);
	public void delete(String id);
	public List<File> select(String[] ids);
	public File find(String id);
}
