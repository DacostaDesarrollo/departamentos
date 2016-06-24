<?php
	$con = mysqli_connect("localhost","root","","colombia");

	// Check connection
	if (mysqli_connect_errno())
	  {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  }

	if ($resultado = $con->query("SELECT * FROM departamento")) {
	    /* liberar el conjunto de resultados */

	    while ($row = $resultado->fetch_object()){
        	$departamentos[] = $row;
    	}
	    $resultado->close();

	    echo json_encode($departamentos);
	}

?>