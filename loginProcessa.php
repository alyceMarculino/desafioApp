<?php
	if(isset($_POST['logar'])){
		$cpf = $_POST['cpf'];
		$_SESSION['cpf']= $cpf;
		if($cpf == "00310420156") { 
			header('Location: admin.html');
		} 
		else {
            header('Location: user.html');
		}
	}
?>
