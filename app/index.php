<?php
$base_url = 'http://localhost';
include 'header.php';
?>

<!--CSS-->
<link rel="stylesheet" href="<?= $base_url ?>/css/style-t_page_Home.css">

<main class="home-main">
    <section>
        <img class="home-main-core" src="<?= $base_url ?>/assets/img/core.png" alt="Escudo">
        <h1 class="home-main-title">Conoce las novedades y noticias del Mundo Tech</h1>
        <a title="Mi Blog" class="home-main-button" href="<?= $base_url ?>/about.php">Entra ya!</a>  
    </section>
</main>

<?php include 'footer.php'; ?>
