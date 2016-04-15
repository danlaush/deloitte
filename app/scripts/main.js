$(document).ready(function() {
	$('#modal').on('show.bs.modal', function (event) {
	  var button = $(event.relatedTarget) // Button that triggered the modal
	  var title = button.data('title') // Extract info from data-* attributes
	  var text = button.data('caption')
	  
	  var modal = $(this)
	  modal.find('#modalLabel').text(title)
	  modal.find('#modalText').text(text)
	})
});