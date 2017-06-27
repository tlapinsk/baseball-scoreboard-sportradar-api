$(document).ready(function worker() {
	$.ajax({
	  type: "GET",
	  url: "/sportradar/mlbSportradar",
	  dataType: "JSON",
	  success: function(data) {
	    console.log(data);
		  $.each(data, function(key, val) {
				$( "#container" ).append('<table>');
				$( "#container" ).append('<tr>');
				$( "#container" ).append('<th>Team</th>');
				$( "#container" ).append('<th>Runs</th>');
				$( "#container" ).append('<th>Hits</th>');
				$( "#container" ).append('<th>Errors</th>');
				$( "#container" ).append('</tr>');
				$( "#container" ).append('<tr>');
				$( "#container" ).append("<td id=''"+key+"''>"+val.home_name+"</td>");
				$( "#container" ).append("<td id=''"+key+"''>"+val.home_runs+"</td>");
				$( "#container" ).append("<td id=''"+key+"''>"+val.home_hits+"</td>");
				$( "#container" ).append("<td id=''"+key+"''>"+val.home_errors+"</td>");
				$( "#container" ).append("</tr>");
				$( "#container" ).append("<tr>");
				$( "#container" ).append("<td id=''"+key+"''>"+val.away_name+"</td>");
				$( "#container" ).append("<td id=''"+key+"''>"+val.away_runs+"</td>");
				$( "#container" ).append("<td id=''"+key+"''>"+val.away_hits+"</td>");
				$( "#container" ).append("<td id=''"+key+"''>"+val.away_errors+"</td>");
				$( "#container" ).append("</tr>");
				$( "#container" ).append("</table>");
			});
		},
		// complete: function() {
		// 	setTimeout(worker, 5000);
	 //  }
	});
});
