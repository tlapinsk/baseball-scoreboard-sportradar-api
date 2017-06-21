//This function pulls data from sportradar_controller.rb
// var callAPI=function(){
// 	return $.getJSON("/sportradars/mlbSportradar", function(data) {
//     var html = '';
//     $.each(data, function(key, value){
//         html += '<div class="game_id">';
//         html += '<table>';
//         html += '<tr>';
//         html += '<th>"Name"</th>';
//         html += '</tr>';
//         html += '</table>';
//         // html += '<img src="images/'+value.product+'.png"/>';
//         // html += '<label for="'+value.product+'">'+value.name+':</label>';
//         // html += '<input type="text" id="'+value.product+'" name="'+value.product+'" value="0" stock="'+value.stock+'" price="'+value.price+'" required>';
//         html += '</div>';
//     });
// 		$('#yourContainerId').html(html);
// 		});
// }

// $(window).load = callAPI;

$(function) (){
	$.ajax({
		type: 'GET',
		url: '/sportradars/mlbSportradar'
	})
}