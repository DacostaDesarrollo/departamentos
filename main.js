jQuery(document).ready(function() {


		var departamentoSelecionado= 0;
		/**
		* Instancia para la petición ajax devuelve los datos encontrados
		*/
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
       	

       	
       	/**
       	 * [empty description]
       	 * @param  {[type]} ){					$('#departamentos .typeahead').typeahead('val', '');				}    [description]
       	 * @param  {[type]} suggestion:               function(data){					return   '<p><strong>' +             data.nombre + '</strong></p>';				}			}		} [description]
       	 * @return {[type]}                           [description]
       	 */
		$('#departamentos .typeahead').typeahead(null, {
			minLength: 0,
  			highlight: true,
  			name: 'Departamentos',
			display: 'nombre',
			source: departamentos.ttAdapter(),
			templates: {
				empty: function(){

					$('#departamentos .typeahead').typeahead('val', '');

				},
				suggestion: function(data){
					return '<p><strong>' + data.nombre + '</strong></p>';
				}

			}
		})
		/**
		 * [Evento que se ejecuta cuando un elemento es seleccionado]
		 * @param  {[object]} e    [evento]
		 * @param  {[object]} departamento) [object con el departamento seleccionado]
		 * @return {[void]}      [vacio]
		 */
		.on('typeahead:selected', function (e, departamento) {
			/**
			 * Id del departamento
			 */
		    departamentoSelecionado = departamento.num;
		   
		    $('#departamentos .typeahead').attr('idDepartamento',departamentoSelecionado);
		    /**
		     * obtiene las ciudades
		     */
		    ciudad(departamentoSelecionado);

		});


		/**
		 * [ciudad Obtiene las ciudades de acuerdo al departamento]
		 * @param  {[number]} departamentoId [id del departamento]
		 * @return {[void]}                [void]
		 */
		var ciudad = function(departamentoId){
			/**
			 * Petición ajax para obtener las ciudades por departamento
			 */
			$.ajax({
				url: 'ciudad.php',
				type: 'POST',
				dataType: 'json',
				data: {departamento: departamentoId},
			})
			.done(function(cuidades) {
				/**
				 * Se limpia el input para llenarlo de nuevo con datos de
				 * un nuevo departamento
				 */
				$('#ciudad').empty();

				/**
				*Se llena un select con las ciudades encontradas
				*/
				$.each(cuidades, function (i, item) {

				    $('#ciudad').append($('<option>', { 
				        value: item.id_ciudad,
				        text : item.nombre.toLowerCase()
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