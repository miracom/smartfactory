package com.mesplus.WMG.service.filter;

import org.cometd.server.filter.DataFilter;
import org.cometd.server.filter.JSONDataFilter;;

public class BadWordFilter extends JSONDataFilter {
	@Override
	protected Object filterString(String string) {
		if (string.indexOf("dang") >= 0)
			throw new DataFilter.Abort();
		return string;
	}
}
