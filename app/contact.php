<?php
$base_url = 'http://localhost';
include 'header.php';
?>

<!--css-->
<link rel="stylesheet" href="<?= $base_url ?>/css/style-t_page_About.css">
<link rel="stylesheet" href="<?= $base_url ?>/css/style-t_page_Contact.css">


<main class="about-main">
        <section class="profile-main-container">
            <div class="grid-container profile-container">
                <div class="about-news-img-container">
                    <img title="Leonardo Rios Pineda" src="<?= $base_url ?>/assets/img/projects_img/Perfil.jpg" alt="Leonardo Rios Pineda">
                </div>
                <div class="about-news-info-container">
                    <h2>¡Contactenos! 😉</h2>
                    <p>Estamos comprometidos a ayudar a nuestros clientes a posicionarse de manera efectiva en la web. <br>No lo piense más</br>Mandenos un correo y juntos construiremos su <strong>Negocio Online.</strong>🤝 🧑‍💻</p>
                </div>
            </div>
        </section>
            

        <section class="contact-main-container">

            <div class="contact-main-container__left">
                <a title="Mensaje por Correo" href="mailto:leonard@neosoir.com.com?subject=Estoy%20interesado%20en%20tus%20servicios&body=Hola%20Leonard%20te%20contacto%20desde%20tu%20Website%20:)">                    <img src="<?= $base_url ?>/assets/img/email.png" alt="Telegram"></a>
                <p>leonard@neosoir.com</p>
            </div>
                
            <div class="contact-main-container__right">
                <a title="Mensaje por Telegram" href="https://t.me/NeoSoir"><img src="<?= $base_url ?>/assets/img/telegra.png" alt="Telegram"></a>
                <p>@NeoSoir</p>
            </div>
            
        </section>
</main>


<?php include 'footer.php'; ?>
