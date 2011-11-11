package com.mesplus.MBI.model;

import java.util.List;

public class Query {
	private String factory;
	private String queryid;
	private String statement;
	private String commandtype;
	private String description;
	private int commandtimeout;
	private String commandtext;
	private List<QueryParameter> parameters;
	
	public List<QueryParameter> getParameters() {
		return parameters;
	}
	public void setParameters(List<QueryParameter> parameters) {
		this.parameters = parameters;
	}
	
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
	public String getStatement() {
		return statement;
	}
	public void setStatement(String statement) {
		this.statement = statement;
	}
	public String getCommandtype() {
		return commandtype;
	}
	public void setCommandtype(String commandtype) {
		this.commandtype = commandtype;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getCommandtimeout() {
		return commandtimeout;
	}
	public void setCommandtimeout(int commandtimeout) {
		this.commandtimeout = commandtimeout;
	}
	public String getCommandtext() {
		return commandtext;
	}
	public void setCommandtext(String commandtext) {
		this.commandtext = commandtext;
	}
}
