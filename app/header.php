<?php
$base_url = 'http://localhost';
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neo Blog</title>

    <!--Estilos del loader-->
    <link rel="stylesheet" href="<?= $base_url ?>/css/style-loader.css">
    <!--Estilos del header-->
    <link rel="stylesheet" href="<?= $base_url ?>/css/style-header.css">
    <!--Estilos de los iconos-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
</head>

<body>
    <!--Loader-->
    <div class="loader" id="loader">
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
    </div>

    <!--Diseño del header-->
    <header>
        <section class="header-icons-container">
            <div class="icons">
                <a title="Telegram" href="https://t.me/NeoSoir"><i class="fab fa-telegram-plane"></i></a>
                <a title="Linkedin" href="https://mx.linkedin.com/in/leonardo-rios-pineda-979417216"><i class="fab fa-linkedin-in"></i></a>
                <a title="GitHub" href="https://github.com/neosoir"><i class="fab fa-github"></i></a>
                <a title="Platzi" class="fa-platzi" href="https://platzi.com/p/leonard-rios/">
                    <img src="<?= $base_url ?>/assets/img/platzi.png" alt="Platzi">
                </a>
                <a title="Acerca de..." href="<?= $base_url ?>/about.php" class="profile-link">About</a>
            </div>
        </section>

        <section class="nav-logo-container">
            <a href="<?= $base_url ?>/index.php">
                <img title="Inicio" src="<?= $base_url ?>/assets/img/Logo.png" alt="Logo de mi blog">
            </a>
        </section>    
    </header>
