$(document).ready(function() {
	var table = $('#example').DataTable( {
			"ajax": "https://gist.githubusercontent.com/azartheen/a0abc331c3f5e1dd55855fae851c4076/raw/20ba68a3fadb2df5eabc0664d967a0796be07a2c/testAz.txt",
			"columnDefs": [ {
					"targets": -1,
					"data": null,
          "defaultContent": "<button>Click!</button>"
			} ]
			
	} );

  $('#example tbody').on( 'click', 'button', function () {
    var data = table.row( $(this).parents('tr') ).data();
    alert( data[0] +"'s Earn is: "+ data[ 5 ] );
} );
	 
} );