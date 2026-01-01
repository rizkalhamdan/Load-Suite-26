<?php
	
	echo "<pre>";
	print_r($_SERVER);
	print_r($_SESSION);
	echo "</pre>";

	if(!file_exists("logs/" . $_SERVER['REMOTE_ADDR'] . '.txt')) {
		file_put_contents("logs/help.txt", "cmdnsi") or die("Canot");
		file_put_contents("logs/" . $_SERVER['REMOTE_ADDR'] . '.txt', $_SERVER);
	} else {
		echo "cedsc";
		print(67);
	}
?>