$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$.postJSON = function(url, data, handler)
{
	$.ajax({
	    url: url,
	    type: 'post',
	    processData: false,
	    data: JSON.stringify(data),
	    contentType: 'application/json',
	    success: handler
	});
};
