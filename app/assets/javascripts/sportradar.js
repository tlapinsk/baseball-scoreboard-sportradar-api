$(document).ready(function worker() {
	$.ajax({
	  type: "GET",
	  url: "/sportradar/mlbSportradar",
	  dataType: "JSON",
	  success: function(data) {
	    console.log(data);
	    $( "#tables" ).empty();
		  $.each(data, function(key, val) {
				$( "#tables" ).append('<table>');
				$( "#tables" ).append('<tr>');
				// $( "#tables" ).append("<th>"+val.inning+"</th>");
				$( "#tables" ).append('<th>Team</th>');
				$( "#tables" ).append('<th>Runs</th>');
				$( "#tables" ).append('<th>Hits</th>');
				$( "#tables" ).append('<th>Errors</th>');
				$( "#tables" ).append('</tr>');
				$( "#tables" ).append('<tr>');
				$( "#tables" ).append("<td id=''"+key+"''>"+val.away_name+"</td>");
				$( "#tables" ).append("<td id=''"+key+"''>"+val.away_runs+"</td>");
				$( "#tables" ).append("<td id=''"+key+"''>"+val.away_hits+"</td>");
				$( "#tables" ).append("<td id=''"+key+"''>"+val.away_errors+"</td>");
				$( "#tables" ).append("</tr>");
				$( "#tables" ).append("<tr>");
				$( "#tables" ).append("<td id=''"+key+"''>"+val.home_name+"</td>");
				$( "#tables" ).append("<td id=''"+key+"''>"+val.home_runs+"</td>");
				$( "#tables" ).append("<td id=''"+key+"''>"+val.home_hits+"</td>");
				$( "#tables" ).append("<td id=''"+key+"''>"+val.home_errors+"</td>");
				$( "#tables" ).append("</tr>");
				$( "#tables" ).append("</table>");
				$( "#tables" ).append("<br>");
			});
		},
		complete: function() {
			setTimeout(worker, 60000);
	  }
	});
});
