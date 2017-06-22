$(document).ready(function() {
	$(function() {
		$.getJSON("/sportradar/mlbSportradar", function(data){
			var items = [];
			$.each(data, function(key, val) {
				items.push('<table>');
				items.push('<tr>');
				items.push('<th>Team"</th>');
				items.push('<th>Runs"</th>');
				items.push('<th>Hits"</th>');
				items.push('<th>Errors"</th>');
				items.push('</tr>');
				items.push('<tr>');
				items.push("<td id=''"+key+"''>"+val.home_name+"</td>");
				items.push("<td id=''"+key+"''>"+val.home_runs+"</td>");
				items.push("<td id=''"+key+"''>"+val.home_hits+"</td>");
				items.push("<td id=''"+key+"''>"+val.home_errors+"</td>");
				items.push("</tr>");
				items.push("<tr>");
				items.push("<td id=''"+key+"''>"+val.away_name+"</td>");
				items.push("<td id=''"+key+"''>"+val.away_runs+"</td>");
				items.push("<td id=''"+key+"''>"+val.away_hits+"</td>");
				items.push("<td id=''"+key+"''>"+val.away_errors+"</td>");
				items.push("</tr>");
				items.push("</table>");
			});
		});
	});
});
