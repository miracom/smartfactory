$('.more').live('click', function(e) {
	var anchor = $(e.target);
	var base_ul = anchor.prev('ul')
	var last_id = base_ul.children('li:last').attr('id');

	$.ajax({
		url: anchor.attr('href'),
		type : 'GET',
		data : {last_id: last_id},
		dataType : 'json',
		success : function(data) {
			var tmpl = '<li id="news_${id}">${text}</li>'
			$.tmpl(tmpl, data).appendTo(base_ul);
		},
		error : function(xhr, status, err) {
			alert("Error : " + err + ", Type : " + status + ", Response : " + xhr.status + " " + xhr.statusText);
		}
	});
	
	return false;
});

$(window).scroll(function(){
	if  ($(window).scrollTop() == $(document).height() - $(window).height()){
		$('#content .more').trigger('click');
	}
});
