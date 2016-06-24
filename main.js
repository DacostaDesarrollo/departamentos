jQuery(document).ready(function() {
	/*
	jQuery('#departamento').selectize({
		options: [],
		load: function(query, callback) {
			alert();
        if (!query.length) return callback();
        $.ajax({
            url: 'departamentos.php',
            type: 'GET',
            error: function() {
                callback();
            },
            success: function(res) {
            	console.log(res);
                callback(res);
            }
        });
    	}

	});
	jQuery('#ciudad').selectize();
	*/
	
	var states = new Bloodhound({
          datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.num); },
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          remote: {
                url: "departamentos.php",
                filter: function (departamentos) {
                	departamentos = JSON.parse(departamentos);
                    return $.map(departamentos, function (departamento) {

                        return {
                            num: departamento.id_departamento,
                            nombre: departamento.nombre.toLowerCase()
                        };
                    });
                }
           },
           limit: 1000
        });
        //states.initialize();

	$('#departamentos').typeahead(null, {
	  name: 'Departamentos',
	  display: 'departamento',
	  source: states,
	  templates: {
		suggestion: function(data){

		      return '<p><strong>' + data.nombre + '</strong> - ' + data.num + '</p>';
	  }

	}});


});