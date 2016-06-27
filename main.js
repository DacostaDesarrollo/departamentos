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
		var departamentoSelecionado= 0;
		var departamentos = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('nombre'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          remote: {
          		header: '<h3 class="league-name">Departamentos</h3>',
                url: "departamentos.php?query=%QUERY",
                filter: function (departamentos) {
                	//departamentos = JSON.parse(departamentos);
                    return $.map(departamentos, function (departamento) {

                        return {
                            num: departamento.id_departamento,
                            nombre: departamento.nombre.toLowerCase()
                        };

                    });
                },
                wildcard: '%QUERY'
           },
           limit: 1000
        });
       	
       	departamentos.initialize();

		$('#departamentos .typeahead').typeahead(null, {
			minLength: 0,
  			highlight: true,
  			name: 'Departamentos',
			display: 'nombre',
			source: departamentos.ttAdapter(),
			templates: {
				empty: function(){
					console.log("vacio");
					$('.typeahead').typeahead('val', '');
				},
				suggestion: function(data){
					return '<p><strong>' + data.nombre + '</strong></p>';
				}

			}
		}).on('typeahead:selected', function (e, departamento) {
		    departamentoSelecionado = departamento.num;
		    ciudad(departamentoSelecionado);
		});

		var ciudad = function(departamentoId){

			$.ajax({
				url: 'ciudad.php',
				type: 'POST',
				dataType: 'json',
				data: {departamento: departamentoId},
			})
			.done(function(cuidades) {
				$('#ciudad').empty();
				$.each(cuidades, function (i, item) {

				    $('#ciudad').append($('<option>', { 
				        value: item.id_ciudad,
				        text : item.nombre 
				    }));
				});

			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
			
		};
});