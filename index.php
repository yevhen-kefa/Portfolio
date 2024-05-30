
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
    <link rel="stylesheet" href="css/style.css" />
    <script defer src="js/script.js"></script>
  </head>
  <body>
    <main>
      <!--============================== SIDEBAR START ==============================-->
      <aside class="sidebar" data-sidebar>
        <div class="sidebar-info">
          <figure class="avatar-box">
            <img src="img/yevhen.jpg" alt="Kefa Yevhen" width="80" />
          </figure>

          <div class="info-content">
            <h1 class="name" title="Thomas Shelby">Kefa Yevhen</h1>

            <p class="title">Software developer</p>
            <ul class="social-list">
              <li class="social-item">
                <a href="#" class="social-link"><i class="fa-brands fa-linkedin" title="LinkedIn"></i></a>
              </li>
              <li class="social-item">
                <a href="#" class="social-link"> <i class="fa-brands fa-instagram"></i> </a>
              </li>
              <li class="social-item">
                <a href="#" class="social-link"> <i class="fa-brands fa-github"></i> </a>
              </li>
            </ul>
          </div>

          <button class="info_more-btn" data-sidebar-btn>
            <span>Afficher les contacts</span>

            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div class="sidebar-info_more">
          <div class="separator"></div>

          <ul class="contacts-list">
            <li class="contact-item">
              <div class="icon-box">
                <i class="fa-regular fa-envelope"></i>
              </div>

              <div class="contact-info">
                <p class="contact-title">Email</p>
                <a href="mailto:eugenekefa04@gmail.com" class="contact-link">eugenekefa04@gmail.com</a>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <i class="fa-solid fa-phone"></i>
              </div>

              <div class="contact-info">
                <p class="contact-title">Téléphone</p>
                <a href="tel:+33604106073" class="contact-link">+33604106073</a>
              </div>
            </li>

            <li class="contact-item">
              <div class="icon-box">
                <i class="fa-solid fa-location-dot"></i>
              </div>

              <div class="contact-info">
                <p class="contact-title">Location</p>
                <address>Saint-Maur-des-Fossés,  Île-de-France, France</address>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div class="main-content">
        <!--============================== NAVBAR START ==============================-->
        <nav class="navbar">
          <ul class="navbar-list">
            <li class="navbar-item">
              <button class="navbar-link active" data-nav-link>About</button>
            </li>
            <li class="navbar-item">
              <button class="navbar-link" data-nav-link>Resume</button>
            </li>
            <li class="navbar-item">
              <button class="navbar-link" data-nav-link>Portfolio</button>
            </li>
            <li class="navbar-item">
              <button class="navbar-link" data-nav-link>Contact</button>
            </li>
          </ul>
        </nav>
        <!--============================== NAVBAR END ==============================-->

        <!--============================== ABOUT START ==============================-->
        <article class="about active" data-page="about">
          <header>
            <h2 class="h2 article-title">A propos de moi</h2>
          </header>

          <section class="about-text">
            <p>
              Je suis un étudiant développeur ukrainien qui étudie actuellement à l'Université Gustave Eiffel en France.
            </p>

            <p>
              Je m'intéresse à la programmation depuis l'école, c'est pourquoi j'ai choisi cette spécialité. 
              J'ai d'abord étudié en Ukraine, mais je suis actuellement en France. Je m'intéresse au développement de logiciels et à
              l'administration de réseaux, que j'étudie actuellement. Parallèlement à mes études de développeur à l'Université Gustave Eiffel, 
              j'étudie également à l'IT STEP Computer Academy dans le domaine des réseaux et de la cybersécurité. 
              En dehors de la programmation, j'aime faire de la gym et je joue de la guitare et du piano.
            </p>
            <a href="img/CV_YevhenKefa .pdf" download class="btn">
              <i class="fa-solid fa-download"></i> <span>Télécharger le CV</span>
            </a>
          </section>
        </article>
        <!--============================== ABOUT END ==============================-->

        <!--============================== RESUME START ==============================-->
        <article class="resume" data-page="resume">
          <header>
            <h2 class="h2 article-title">Resume</h2>
          </header>

          <section class="timeline">
            <div class="title-wrapper">
              <div class="icon-box">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 class="h3">Formations</h3>
            </div>

            <ol class="timeline-list">
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">IUT /Université Gustave Eiffel</h4>
                <span>Septembre 2023 - Septembre 2026</span>
                <p class="timeline-text">
                  Parcours développement application
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Centre de formation ELFE (Ecole de Langue Française)</h4>
                <span>Janvier 2023 – Août 2023</span>
                <p class="timeline-text">
                  Formation intensive de français, Campus France <br>
                  Participation à un programme d’urgence de formation en français destiné
                  aux étudiants ukrainiens
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">IT STEP Computer Academy</h4>
                <span>Décembre 2022 - Mai 2025</span>
                <p class="timeline-text">
                  Réseaux et cyber sécurité<br>
                  Formation à distance destinée à apprendre comment créer et entretenir des
                  réseaux informatiques (protection de données personnelles et de données de
                  l’entreprise)
                </p>
              </li>

              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Université Nationale de Chernivtsi</h4>
                <span>Septembre 2021 – Juin 2022</span>
                <p class="timeline-text">
                  Télécommunications et ingénierie radio<br>
                  Validation de la 1ère année d’étude universitaire en informatique
                </p>
              </li>
            </ol>
          </section>

          <section class="timeline">
            <div class="title-wrapper">
              <div class="icon-box">
                <i class="fa-solid fa-book-open-reader"></i>
              </div>
              <h3 class="h3">Expériences</h3>
            </div>

            <ol class="timeline-list">
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Développement de sites web</h4>
                <span>Depuis Octobre 2023</span>
                <p class="timeline-text">
                  Développement d'un site web pour la ville de Grenade en Espagne au sein
                  d'une équipe de 6 personnes utilisant HTML, CSS, JS
                </p>
              </li>
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Développement de jeux Qix en Python</h4>
                <span>Octobre 2023 - Décembre 2023</span>
                <p class="timeline-text">
                  J’ai occupé le poste développeur. Mon rôle a été de créer le script, de
                  déterminer les zones de jeu et les différentes règles
                </p>
              </li>
              <li class="timeline-item">
                <h4 class="h4 timeline-item-title">Développement d'une base de données en SQL</h4>
                <span>Novembre 2023 - Avril 2024</span>
                <p class="timeline-text">
                  Développement d'une base de données SQL dans le service MySQL 
                  sur le thème du "cimetière" en binôme. Plus tard, après avoir maîtrisé PHP,
                   nous avons développé un site web basé sur une table SQL prête à l'emploi.
                </p>
              </li>
            </ol>
          </section>
          <section class="skill">
            <h3 class="h3 skills-title">Mes compétences</h3>
            <ul class="skills-list">
              <li class="skills-item">
                <img src="img/html.png" alt="Html" />
                <h5 class="h5">Html5</h5>
              </li>
              <li class="skills-item">
                <img src="img/css.png" alt="CSS" />
                <h5 class="h5">CSS3</h5>
              </li>
              <li class="skills-item">
                <img src="img/sass.png" alt="Sass" />
                <h5 class="h5">Sass</h5>
              </li>
              <li class="skills-item">
                <img src="img/javascript.png" alt="JavaScript" />
                <h5 class="h5">JavaScript</h5>
              </li>
              <li class="skills-item">
                <img src="img/java.png" alt="Java" />
                <h5 class="h5">Java</h5>
              </li>
              <li class="skills-item">
                <img src="img/php.png" alt="php" />
                <h5 class="h5">Php</h5>
              </li>
              <li class="skills-item">
                <img src="img/sql.png" alt="sql" />
                <h5 class="h5">Sql</h5>
              </li>
              <li class="skills-item">
                <img src="img/python.png" alt="Python" />
                <h5 class="h5">Python</h5>
              </li>
              <li class="skills-item">
                <img src="img/figma.png" alt="Figma" />
                <h5 class="h5">Figma</h5>
              </li>
              <li class="skills-item">
                <img src="img/2993682_brand_brands_linux_logo_logos_icon.png" alt="Linux" />
                <h5 class="h5">Linux</h5>
              </li>
            </ul>
          </section>
        </article>
        <!--============================== RESUME END ==============================-->

        <!--============================== PORTFOLIO START ==============================-->
        <article class="portfolio" data-page="portfolio">
          <header>
            <h2 class="h2 article-title">Portfolio</h2>
          </header>
          <section class="projects">
            <ul class="project-list">
              <li class="project-item active">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <i class="fa-solid fa-arrow-up-long"></i>
                    </div>
                    <img src="img/qix.png" alt="Qix" loading="lazy" />
                  </figure>
                  <h3 class="project-title">Qix</h3>
                  <p class="project-category">Développement de jeux</p>
                </a>
              </li>
              <li class="project-item active">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <i class="fa-solid fa-arrow-up-long"></i>
                    </div>
                    <img src="img/cimetiere_conect.png" alt="cimetiere" loading="lazy" />
                  </figure>
                  <h3 class="project-title">Cimetière</h3>
                  <p class="project-category">Développement d'un site web avec une base de données</p>
                </a>
              </li>
              <li class="project-item active" data-filter-item data-category="web design">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <i class="fa-solid fa-arrow-up-long"></i>
                    </div>
                    <img src="img/craftyhub.png" alt="craftyhub" loading="lazy" />
                  </figure>
                  <h3 class="project-title">Craftyhub</h3>
                  <p class="project-category">Développer un prototype d'application mobile avec Figma</p>
                </a>
              </li>
              <li class="project-item active" data-filter-item data-category="applications">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <i class="fa-solid fa-arrow-up-long"></i>
                    </div>
                    <img src="./assets/images/project-4.png" alt="brawlhalla" loading="lazy" />
                  </figure>
                  <h3 class="project-title">Brawlhalla</h3>
                  <p class="project-category">Applications</p>
                </a>
              </li>
              <li class="project-item active" data-filter-item data-category="web design">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <i class="fa-solid fa-arrow-up-long"></i>
                    </div>
                    <img src="./assets/images/project-5.png" alt="dsm." loading="lazy" />
                  </figure>
                  <h3 class="project-title">DSM.</h3>
                  <p class="project-category">Web design</p>
                </a>
              </li>
              <li class="project-item active" data-filter-item data-category="web design">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <i class="fa-solid fa-arrow-up-long"></i>
                    </div>
                    <img src="./assets/images/project-6.png" alt="metaspark" loading="lazy" />
                  </figure>
                  <h3 class="project-title">MetaSpark</h3>
                  <p class="project-category">Web design</p>
                </a>
              </li>
              <li class="project-item active" data-filter-item data-category="web development">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <i class="fa-solid fa-arrow-up-long"></i>
                    </div>
                    <img src="./assets/images/project-7.png" alt="summary" loading="lazy" />
                  </figure>
                  <h3 class="project-title">Summary</h3>
                  <p class="project-category">Web development</p>
                </a>
              </li>
              <li class="project-item active" data-filter-item data-category="applications">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <i class="fa-solid fa-arrow-up-long"></i>
                    </div>
                    <img src="./assets/images/project-8.jpg" alt="task manager" loading="lazy" />
                  </figure>
                  <h3 class="project-title">Task Manager</h3>
                  <p class="project-category">Applications</p>
                </a>
              </li>
              <li class="project-item active" data-filter-item data-category="web development">
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <i class="fa-solid fa-arrow-up-long"></i>
                    </div>
                    <img src="./assets/images/project-9.png" alt="arrival" loading="lazy" />
                  </figure>
                  <h3 class="project-title">Arrival</h3>
                  <p class="project-category">Web development</p>
                </a>
              </li>
            </ul>
          </section>
        </article>
        <!--============================== PORTFOLIO START ==============================-->

        <!--============================== CONTACT START ==============================-->
        <article class="contact" data-page="contact">
          <header>
            <h2 class="h2 article-title">Contact</h2>
          </header>

          <section class="mapbox" data-mapbox>
            <figure>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21024.433662252533!2d2.471468069124142!3d48.79994403287269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60cf0a32d86a9%3A0xb0dd0b84be904e3d!2z0KHQtdC9LdCc0L7RgC3QtNC1LdCk0L7RgdGB0LU!5e0!3m2!1sru!2sfr!4v1717043233786!5m2!1sru!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="400"
                height="300"
                loading="lazy"
              ></iframe>
            </figure>
          </section>

          <section class="contact-form">
            <h3 class="h3 form-title">Contact Form</h3>

            <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" class="form" data-form>
              <div class="input-wrapper">
                <input type="text" name="fullname" class="form-input" placeholder="Nom complet" required data-form-input/>

                <input
                  type="email"
                  name="email"
                  class="form-input"
                  placeholder="Email address"
                  required
                  data-form-input
                />
              </div>

              <textarea
                name="message"
                class="form-input"
                placeholder="Votre message"
                required
                data-form-input
              ></textarea>

              <button class="btn form-btn" type="submit" disabled data-form-btn>
                <i class="fa-solid fa-paper-plane"></i> <span>Envoyer un message</span>
              </button>
            </form>
            <?php
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    $fullname = $_POST['fullname'];
                    $email = $_POST['email'];
                    $message = $_POST['message'];

                    $to = "eugenekefa04@gmail.com"; 
                    $subject = "New Message from Contact Form";
                    $body = "Full Name: $fullname\nEmail: $email\nMessage: $message";

                    if (mail($to, $subject, $body)) {
                        echo "Message sent successfully. Redirecting back to contact form...";
                        header("refresh:3;url=index.html");
                    } else {
                        echo "Error: Unable to send message";
                    }
                }
            ?>
          </section>
        </article>
        <!--============================== CONTACT END ==============================-->
      </div>
    </main>
  </body>
</html>
