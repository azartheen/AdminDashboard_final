$(document).ready(function() {
	var table = $('#example').DataTable( {
			"ajax": "https://gist.githubusercontent.com/azartheen/a0abc331c3f5e1dd55855fae851c4076/raw/20ba68a3fadb2df5eabc0664d967a0796be07a2c/testAz.txt",
			"columnDefs": [ {
					"targets": -1,
					"data": null,
					"defaultContent": "<button class=\"GetName\">Accept</button><button class=\"GetPosition\">Reject</button>"
			} ]
			
	} );

	$('#example tbody').on( 'click', 'button', function () {
		var action = this.className;
		var data = table.row( $(this).parents('tr') ).data();

		if (action=='GetName')
		alert( 'This is the name: '+data[0]);

		if(action == 'GetPosition')
		alert( 'This is the Position: '+data[1]);
	} );
 
} );