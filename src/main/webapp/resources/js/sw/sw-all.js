$(document).ready(function() {
	$('.js_tab a').swnavi({target: 'company_works'});
	$('a.js_content').swnavi({target: 'content'});
	
	$('.collapse_handle').live('click', function(e) {
		$(e.target).siblings('.collapsible').slideToggle(500); 
	});
	
	$('input.auto_complete').live('keyup', function(e) {
		var input = $(e.target);
		var target = input.parent().siblings('div');
		var url = input.attr('href');
		var lastValue = input[0].value;
		setTimeout(function() {
			var currentValue = input[0].value;
			
			if(lastValue === currentValue) {
				$.ajax({
					url: url,
					data: {key: input[0].value}, 
					context: input,
					success: function(data, status, jqXHR){
						target.show();
						target.html(data);
					}
				});
			} else {
			}
		},500);
	});
	
	$('input.auto_complete').live('focusout', function(e) {
		var input = $(e.target);
		var target = input.parent().siblings('div');
		setTimeout(function() {
			input[0].value = '';
			target.hide();
		},500);
	});
	
});	