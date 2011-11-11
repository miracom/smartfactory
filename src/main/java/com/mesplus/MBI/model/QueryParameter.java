package com.mesplus.MBI.model;

public class QueryParameter {
	private String factory;
	private String queryid;
	private String name;
	private String pvalue;
	private String direction;
	private String dbtype;
	private int param_size;
	private int param_idx;
	
	public String getFactory() {
		return factory;
	}
	public void setFactory(String factory) {
		this.factory = factory;
	}
	public String getQueryid() {
		return queryid;
	}
	public void setQueryid(String queryid) {
		this.queryid = queryid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPvalue() {
		return pvalue;
	}
	public void setPvalue(String pvalue) {
		this.pvalue = pvalue;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
	public String getDbtype() {
		return dbtype;
	}
	public void setDbtype(String dbtype) {
		this.dbtype = dbtype;
	}
	public int getParam_size() {
		return param_size;
	}
	public void setParam_size(int param_size) {
		this.param_size = param_size;
	}
	public int getParam_idx() {
		return param_idx;
	}
	public void setParam_idx(int param_idx) {
		this.param_idx = param_idx;
	}
	
	
}
