$(document).ready(function(){
    $('#legend button:not(:first-of-type)').each(function(){
        var status = $(this).attr('class');
        var count = $('#reports tr[class="' + status + '"]').length;
        $(this).append(" (" + count + ")");
       //$(this).append($($(this).attr('class')).length); 
    });
});
$('#legend').on('click', 'button', function(){
    var status = $(this).attr('class');
    $('#reports tr').show();
    if (status !== 'all') {
    	$('#reports tr:not(":first-of-type,.' + status + '")').hide();
    }
});
$('#reports button').on('click', function(){
    var serviceName = $(this).attr('data-serviceName');
    $('#statusMonitor').text(serviceName);
});
