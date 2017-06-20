//This function pulls data from sportradar_controller.rb
// Stores it in local storage
var callAPI=function(){
	return $.ajax(){
		type: 'GET',
		url: '/sportradars/mlbSportradar',
		data: {format: 'json'},
		dataType: 'json',
		error: function (x, e) { alert(e.responseText); },
		success: function (boxScores) {
			alert(result);
		}
	};
}

$(window).load = callAPI;

// var callAPI=function(){
// 	$.ajax({
// 	  type:"GET",
// 	  url:"INSERT RAKE ROUTE",
// 	  dataType:"json",
// 	  data: {some_parameter: 'hello'},
// 	  success:function(result){
// 	    alert(result);
//   	}
// 	});
// }

// $.ajax({
//    url: 'http://api.joind.in/v2.1/talks/10889',
//    data: {
//       format: 'json'
//    },
//    error: function() {
//       $('#info').html('<p>An error has occurred</p>');
//    },
//    dataType: 'jsonp',
//    success: function(data) {
//       var $title = $('<h1>').text(data.talks[0].talk_title);
//       var $description = $('<p>').text(data.talks[0].talk_description);
//       $('#info')
//          .append($title)
//          .append($description);
//    },
//    type: 'GET'
// });

// $(document).on("click","#executer-button",callExecuter);

//var callAPI=function(){
// 	$.ajax({
// 		type: 'GET',
// 		url: '/INSERT RAKE ROUTE HERE',
// 		data: {INSERT command here

// 					},
// 		dataType: 'json',
// 		succes:function(){
// 			//Notification that data was pulled
// 			$(this).addClass('done');
// 		}
// 	});
// }


