package com.mesplus.smartfactory.model;

import java.util.Date;

public class Operation {
	private String oper_id;
	private String desc;
	private String type;
	private String factory_id;
	private String unit_1;
	private String unit_2;
	private String unit_3;
	private Date created_at;

	public Operation(String oper_id, String desc, String factory_id) {
		super();
		this.oper_id = oper_id;
		this.desc = desc;
		this.type = "P";
		this.factory_id = factory_id;
		this.unit_1 = "WAFER";
		this.unit_2 = "DIE";
		this.unit_3 = "";
		this.created_at = new Date();
		this.updated_at = new Date();
	}

	public String getOper_id() {
		return oper_id;
	}

	public void setOper_id(String oper_id) {
		this.oper_id = oper_id;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getFactory_id() {
		return factory_id;
	}

	public void setFactory_id(String factory_id) {
		this.factory_id = factory_id;
	}

	public String getUnit_1() {
		return unit_1;
	}

	public void setUnit_1(String unit_1) {
		this.unit_1 = unit_1;
	}

	public String getUnit_2() {
		return unit_2;
	}

	public void setUnit_2(String unit_2) {
		this.unit_2 = unit_2;
	}

	public String getUnit_3() {
		return unit_3;
	}

	public void setUnit_3(String unit_3) {
		this.unit_3 = unit_3;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}

	private Date updated_at;
}
