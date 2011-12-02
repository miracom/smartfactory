$(function() {
	$('.downloadable').live('click', function(e) {
		var filename = $(e.target).text();

		var form = $('<form action="module/CMN/file_download" method="post"><input type="hidden" name="fileId" value="' + filename + '"/></form>');
		form.appendTo('body').submit().remove();
	});
});