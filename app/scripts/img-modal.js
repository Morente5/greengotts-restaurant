/* Allows showing the gallery image preview modal
only when clicked and not dragged (drag to slide the gallery)
*/

var isDragging = false;

$('#owl-carousel img')
.mousedown(function() {
    $(window).mousemove(function() {
        isDragging = true;
        $(window).unbind('mousemove');
    });
})
.mouseup(function() {
    var wasDragging = isDragging;
    isDragging = false;
    $(window).unbind('mousemove');
    if (!wasDragging) {  // If not dragging
        $('#galleryImage').attr('src', $(this).attr('src'));  // Asign the image source to the modal
   		$('#galleryModal').modal('show');  // and show the modal
    }
});