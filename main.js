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

		var ciudad = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('nombre'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          remote: {
          		wildcard: '%QUERY',
          		header: '<h3 class="league-name">ciudad</h3>',
                url: "ciudad.php",
                cache:false,
                prepare: function (query, settings) {
                	var q = "ciudad.php";
  		            if (departamentoSelecionado) {
		                q += '?departamento='+encodeURIComponent(departamentoSelecionado);
		                q += '&query='+encodeURIComponent(query);
		            }

		            return q;
		        },
                filter: function (ciudades) {
                	ciudades = JSON.parse(ciudades);
                	//departamentos = JSON.parse(departamentos);
                    return $.map(ciudades, function (ciudad) {

                        return {
                            num: ciudad.id_ciudad,
                            nombre: ciudad.nombre.toLowerCase()
                        };

                    });
                }
                
           },
           limit: 1000
        });

		ciudad.initialize();
       /*
       	var countries = new Bloodhound({
		  datumTokenizer: Bloodhound.tokenizers.whitespace,
		  queryTokenizer: Bloodhound.tokenizers.whitespace,
		  // url points to a json file that contains an array of country names, see
		  // https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
		prefetch: {
			url:'departamentos.php'
		  }		
		});	
		*/
        departamentos.initialize();

		$('#departamentos .typeahead').typeahead(null, {
			minLength: 0,
  			highlight: true,
  			name: 'Departamentos',
			display: 'nombre',
			source: departamentos.ttAdapter(),
			templates: {
				empty: [
			      '<div class="empty-message">',
			        'No se encontraron datos',
			      '</div>'
			    ].join('\n'),
				suggestion: function(data){
					return '<p><strong>' + data.nombre + '</strong></p>';
				}

			}
		}).on('typeahead:selected', function (e, departamento) {
		    departamentoSelecionado = departamento.num;
		});

		$('#ciudad .typeahead').typeahead(null, {
			minLength: 0,
  			highlight: true,
  			name: 'Ciudad',
			display: 'nombre',
			source: ciudad.ttAdapter(),
			templates: {
				empty: [
			      '<div class="empty-message">',
			        'No se encontraron datos',
			      '</div>'
			    ].join('\n'),
				suggestion: function(data){
					return '<p><strong>' + data.nombre + '</strong></p>';
				}

			}
		});
});