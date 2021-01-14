<?php
	if(isset($_POST['novoTeste'])){
        $nome = $_POST['nome'];
        $arquivo_foto = $_FILES['arquivo']['selfie'];
		
        header('Location: introducao.html');
	}
?>
