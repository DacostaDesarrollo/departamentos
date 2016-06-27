<?php
	$con = mysqli_connect("localhost","root","","colombia");
	$ciudad = [];
	// Check connection
	if (mysqli_connect_errno())
	  {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }

	if ($resultado = $con->query("SELECT * FROM `ciudad` WHERE id_departamento = '".$_GET['departamento']."' AND `nombre` LIKE '%".$_GET['query']."%'")) {
	    /* liberar el conjunto de resultados */

	    while ($row = $resultado->fetch_object()){
        	$ciudad[] = $row;
    	}
	    $resultado->close();

	    print json_encode($ciudad);
	}

?>