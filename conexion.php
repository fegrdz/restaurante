<?php 
	$servername = "localhost";
	$username = "root";
	$password = "";
	$database = "reservassupernova";
	
	// Recoger los valores del formulario
	$destino = $_POST['destino'];
	$hotel = $_POST['hotel'];
	$huespedadulto = $_POST['huespedadulto'];
	$huespedmenor = $_POST['huespedmenor'];
	$habitacion = $_POST['habitacion'];
	$iniciodeviaje = $_POST['iniciodeviaje'];
	$findelviaje = $_POST['findelviaje'];
    $correo = $_POST['correo'];

	// Crear conexión
	$conexion = mysqli_connect($servername, $username, $password, $database);

	// Verificar la conexión
	if (!$conexion) {
		die("La conexión falló: " . mysqli_connect_error());
	}

	// Preparar la consulta SQL
	$sql =  "INSERT INTO reservaciones (destino, hotel, huespedadulto, huespedmenor, habitacion, iniciodeviaje, findelviaje, correo) VALUES ('$destino', '$hotel', '$huespedadulto', '$huespedmenor', '$habitacion', '$iniciodeviaje', '$findelviaje', '$correo')";

	// Ejecutar la consulta
	if (mysqli_query($conexion, $sql)) {
		echo "<h4 class='bien'>Registro completado</h4>";
	} else {
		echo "Error: " . $sql . "<br>" . mysqli_error($conexion);
	}

	// Cerrar la conexión
	mysqli_close($conexion);
?>