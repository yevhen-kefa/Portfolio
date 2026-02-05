document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project-item');
  const popup = document.getElementById('popup-container');
  const popupContent = document.getElementById('popup-content');

  const imageViewer = document.getElementById('image-viewer');
const fullImage = document.getElementById('full-image');
const closeViewer = document.getElementById('close-viewer');

// Делегуємо натискання на зображення в модальному вікні
popupContent.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        fullImage.src = e.target.src;
        imageViewer.style.display = 'flex';
    }
});


// Закрити перегляд при кліку на "X"
closeViewer.addEventListener('click', () => {
    imageViewer.style.display = 'none';
});


  const descriptions = {
    kyoto: `
          <div class="popup-content">
              <header class="modal__header" onclick="togglePopup('kyoto')">
                  <h2  class="h2 form-title">Kyoto</h2>
              </header>
              <div class="modal__content">
                 <div class="modal__blocks">
                    <div class="modal__block">
                        <img src="img/kyoto.png" alt="kyoto">
                        <p>Ce projet consistait à créer un site web présentant la ville de Grenade comme candidate au patrimoine de l’UNESCO. Le site propose des informations sur l’histoire, la culture et les loisirs de la ville.</p>
                    </div>
                    <div class="modal__block">
                        <img src="img/projects/kyoto_1.png" alt="kyoto">
                        <p>Réalisé sur deux semestres en équipe de cinq (dont trois actifs), le site a été développé entièrement sans modèles, en utilisant HTML, CSS, JavaScript, PHP et SQL. Le contenu est chargé dynamiquement depuis une base de données.</p>
                    </div>
                    <div class="modal__block">
                        <p>J’ai participé à la partie front-end, au design de l’interface et à l’intégration du contenu dynamique. Le projet a été un défi surtout organisationnel. Le résultat est un site clair, fonctionnel et responsive. Le code est disponible sur GitHub.</p>
                        <img src="img/projects/kyoto_2.png" alt="kyoto">
                    </div>
                </div>
              </div>
              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/oXoGus/Projet-UNESCO" target="_blank">Voir sur GitHub</a> </h3>
              <section class="skill">
                  <h3 class="h3 skills-title">Utilisé: </h3>
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
                        <img src="img/javascript.png" alt="JavaScript" />
                        <h5 class="h5">JavaScript</h5>
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
                        <img src="img/MySQL.png" alt="sql" />
                        <h5 class="h5">MySQL</h5>
                      </li>
                       <li class="skills-item">
                        <img src="img/figma.png" alt="Figma" />
                        <h5 class="h5">Figma</h5>
                      </li>
                    </ul>
              </section>
          </div>
      `,
      img2brick: `
          <div class="popup-content">
              <header class="modal__header" onclick="togglePopup('img2brick')">
                  <h2  class="h2 form-title">Img2brick</h2>
              </header>
              <div class="modal__content">
                 <div class="modal__blocks">
                    <div class="modal__block">
                        <img src="img/kyoto.png" alt="kyoto">
                        <p>
                        img2brick est une application web full-stack permettant de transformer des photos personnelles en mosaïques de briques optimisées. Réalisé en équipe de quatre dans le cadre du BUT informatique, ce projet visait à créer une solution complète allant de l’importation d’image à la gestion de commande. L’enjeu technique principal était l’intégration d’une architecture hybride utilisant PHP, Java et C pour traiter efficacement des données complexes.
                        </p>
                    </div>
                    <div class="modal__block">
                        <img src="img/projects/kyoto_1.png" alt="kyoto">
                        <p>
                        e système repose sur une structure modulaire où chaque langage remplit un rôle précis. PHP gère l’interface utilisateur et le framework MVC personnalisé, tandis que Java s’occupe du traitement d’image et de la quantification des couleurs. Enfin, un algorithme optimisé en C résout le problème du pavage pour déterminer la disposition idéale des briques. Ce pipeline permet de transformer une image brute en un plan de montage précis tout en minimisant les coûts de fabrication.
                        </p>
                    </div>
                    <div class="modal__block">
                        <p>
                        Au sein du groupe, j'ai participé au développement de la logique backend et à la coordination entre les différents modules technologiques. J'ai travaillé sur la gestion des flux de données entre PHP et Java, ainsi que sur l'implémentation de fonctionnalités sécurisées comme le système d'authentification et la génération de factures. Ce projet m'a permis de maîtriser l'intégration de systèmes multi-langages et de renforcer mes compétences en optimisation algorithmique et en développement web structuré.
                        </p>
                        <img src="img/projects/kyoto_2.png" alt="kyoto">
                    </div>
                </div>
              </div>
              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/yevhen-kefa/SAELego" target="_blank">Voir sur GitHub</a> </h3>
              <section class="skill">
                  <h3 class="h3 skills-title">Utilisé: </h3>
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
                        <img src="img/javascript.png" alt="JavaScript" />
                        <h5 class="h5">JavaScript</h5>
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
                        <img src="img/MySQL.png" alt="sql" />
                        <h5 class="h5">MySQL</h5>
                      </li>
                      <li class="skills-item">
                        <img src="img/figma.png" alt="Figma" />
                        <h5 class="h5">Figma</h5>
                      </li>
                      <li class="skills-item">
                        <img src="img/java.png" alt="Java" />
                        <h5 class="h5">Java</h5>
                      </li>
                      <li class="skills-item">
                        <img src="img/c.svg" alt="C" />
                        <h5 class="h5">C</h5>
                      </li>
                    </ul>
              </section>
          </div>
      `,
      tetris: `
          <div class="popup-content">
              <header class="modal__header" onclick="togglePopup('tetris')">
                  <h2  class="h2 form-title">Tetris</h2>
              </header>
             <div class="modal__content">
               <div class="modal__blocks">
                 <div class="modal__block">
                   <img src="img/tetris.png" alt="tetris">
                   <p>
                   Ce projet universitaire de deux mois consistait à concevoir un clone complet du jeu Tetris (Polyominoes) en Python, en utilisant exclusivement la bibliothèque graphique fltk. En tant que chef de projet au sein d'un binôme, j'ai coordonné l'ensemble du développement pour transformer un concept classique en un logiciel robuste. L'objectif principal était de démontrer une maîtrise avancée de l'algorithmique et de la gestion d'états complexes tout en respectant des contraintes académiques strictes sans recours à des modèles externes.
                   </p>
                 </div>
                 <div class="modal__block">
                   <img src="img/projects/tetris_1.png" alt="tetris">
                   <p>
                   Le moteur de jeu intègre une logique sophistiquée comprenant un système de progression par niveaux, une gestion dynamique du score et une mécanique de sauvegarde via JSON. Outre le mode classique, nous avons implémenté un mode « Bonus » innovant qui introduit la mécanique du « Pourrissement », où les blocs se désintègrent aléatoirement pour accroître la difficulté. L'interface utilisateur a été particulièrement soignée avec une esthétique moderne « Dark Mode » et l'intégration de polices rétro via pyglet pour offrir une expérience visuelle immersive et réactive.
                   </p>
                 </div>
                 <div class="modal__block">
                  <p>
                    Je me suis concentré sur le développement d'algorithmes de collision, la détection des lignes complètes et la logique de mouvement des figures. J'ai également développé un système de menu interactif et un système de gestion continue des données. Ce travail a nécessité un traitement minutieux des matrices et une optimisation constante du code, ce qui m'a permis de renforcer mes compétences en matière de programmation orientée objet et de gestion de projets collaboratifs. 
                  </p>
                   <img src="img/projects/tetris_2.png" alt="tetris">
                 </div>
               </div>
             </div>

              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/yevhen-kefa/tetris" target="_blank">Voir sur GitHub</a> </h3>
              <section class="skill">
                  <h3 class="h3 skills-title">Utilisé: </h3>
                  <ul class="skills-list">
                      <li class="skills-item">
                          <img src="img/python.png" alt="Python" />
                          <h5 class="h5">Python</h5>
                      </li>
                  </ul>
              </section>
          </div>
      `,
      qix: `
          <div class="popup-content">
              <header class="modal__header" onclick="togglePopup('qix')">
                  <h2  class="h2 form-title">Qix</h2>
              </header>
              <div class="modal__content">
                  <div class="modal__blocks">
                      <div class="modal__block">
                          <img src="img/qix.png" alt="Qix">
                          <p>
                            Développement d’un clone du jeu d'arcade classique Qix en Python. Ce projet collaboratif (équipe de deux) met en œuvre les principes de la programmation orientée objet (POO) via la bibliothèque graphique fltk. L'objectif final était de concevoir un logiciel robuste, optimisé et prêt pour une revue de code technique devant un jury d'experts
                          </p>
                      </div>
                      <div class="modal__block">
                          <img src="img/projects/qix_proces.png" alt="Qix">
                          <p>
                          Le gameplay repose sur la conquête territoriale : le joueur contrôle un 'marqueur' pour délimiter et capturer des zones du plateau. La difficulté réside dans la gestion des trajectoires et l'évitement des ennemis dynamiques (Sparx) et de l'entité centrale (Qix). Pour gagner, il est nécessaire de sécuriser au moins 75% du terrain 
                          </p>
                      </div>
                      <div class="modal__block">
                          <p>
                            En tant que responsable des mécaniques centrales, j'ai conçu et implémenté l'intégralité de la logique de mouvement du personnage ainsi que les algorithmes géométriques nécessaires à la capture de territoire. Je me suis également chargé de logique des ennemis et du système de collision. Cette architecture backend, combinée au travail de mon binôme sur l'interface et les animations.
                          </p>
                          <img src="img/projects/qix_proces2.png" alt="Qix">
                      </div>
                  </div>
              </div>
              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/yevhen-kefa/Qix#" target="_blank">Voir sur GitHub</a> </h3>
              <section class="skill">
                  <h3 class="h3 skills-title">Utilisé: </h3>
                  <ul class="skills-list">
                      <li class="skills-item">
                          <img src="img/python.png" alt="Python" />
                          <h5 class="h5">Python</h5>
                      </li>
                  </ul>
              </section>
          </div>
      `,
      primeur_passions: `
          <div class="popup-content">
              <header class="modal__header" onclick="togglePopup('primeur_passions')">
                  <h2  class="h2 form-title">Qix</h2>
              </header>
              <div class="modal__content">
                  <div class="modal__blocks">
                    <div class="modal__block">
                      <img src="img/primeurpassions.png" alt="primeur_passions">
                      <p>Projet éducatif en binôme sur 1,5 semestre, avec pour objectif de créer un site e-commerce. J’ai agi en tant que chef de projet, en supervisant la conception progressive de la base de données et des pages du site.</p>
                    </div>
                    <div class="modal__block">
                      <img src="img/projects/primeurpassions_1.png" alt="primeur_passions">
                      <p>Le site propose des fonctionnalités typiques d’un magasin en ligne : affichage des produits, gestion du panier, validation de commande, etc. Tout a été développé sans utiliser de modèle, depuis zéro.</p>
                    </div>
                    <div class="modal__block">
                      <p>J’ai participé à l’architecture de la base de données, à l’intégration des pages ainsi qu’à la mise en place des processus de commande. Le projet demandait à la fois une rigueur technique et une bonne coordination en équipe.</p>
                      <img src="img/projects/primeurpassions_2.png" alt="primeur_passions">
                    </div>
                    <div class="modal__block">
                      <img src="img/projects/primeurpassions_3.png" alt="primeur_passions">
                      <img src="img/projects/primeurpassions_4.png" alt="primeur_passions">
                    </div>
                  </div>

              </div>
              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/yevhen-kefa/Primeur-Passions" target="_blank">Voir sur GitHub</a> </h3>
              <section class="skill">
                  <h3 class="h3 skills-title">Utilisé: </h3>
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
                        <img src="img/javascript.png" alt="JavaScript" />
                        <h5 class="h5">JavaScript</h5>
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
                        <img src="img/MySQL.png" alt="sql" />
                        <h5 class="h5">MySQL</h5>
                      </li>
                      <li class="skills-item">
                        <img src="img/PostgreSQL.png" alt="sql" />
                        <h5 class="h5">PostgreSQL</h5>
                      </li>
                       <li class="skills-item">
                        <img src="img/figma.png" alt="Figma" />
                        <h5 class="h5">Figma</h5>
                      </li>
                    </ul>
              </section>
          </div>
      `,
      cimetiere: `
        <div class="popup-content">
          <header class="modal__header" onclick="togglePopup('cimetiere')">
              <h2  class="h2 form-title">Cimetiere</h2>
          </header>
          <div class="modal__content">
              <div class="modal__blocks">
                  <div class="modal__block">
                      <img src="img/projects/cim_login.png" alt="cimetiere">
                      <p>Dans ce projet, nous avons travaillé en équipe de deux. Le but de cette tâche était de créer une imitation d'un site web de cimetière avec une base de données sql. </p>
                  </div>
                  <div class="modal__block">
                      <p>Il était nécessaire de créer des sites web en utilisant php et sql. Dans ce projet, j'ai joué le rôle d'un développeur front-end, et mon collègue s'est occupé du développement back-end.  Le développement a permis de mettre en place une interaction complète entre l'utilisateur et la base de données. 
                      </br>Pour aller sur le site, cliquez <a href="">ici</a>.</p>
                      <img src="img/projects/cim_accuil.png" alt="cimetiere">
                  </div>
                  <div class="modal__block">
                      <img src="img/projects/cim_list.png" alt="cimetiere">
                      <img src="img/projects/cim_profil.png" alt="cimetiere">
                  </div>
                 
              </div>
          </div>
          <section class="skill">
                  <h3 class="h3 skills-title">Utilisé: </h3>
                  <ul class="skills-list">
                       <li class="skills-item">
                          <img src="img/php.png" alt="php" />
                          <h5 class="h5">Php</h5>
                        </li>
                        <li class="skills-item">
                          <img src="img/sql.png" alt="sql" />
                          <h5 class="h5">Sql</h5>
                        </li>
                        <li class="skills-item">
                          <img src="img/MySQL.png" alt="sql" />
                          <h5 class="h5">MySQL</h5>
                        </li>
                        <li class="skills-item">
                          <img src="img/PostgreSQL.png" alt="sql" />
                          <h5 class="h5">PostgrSQL</h5>
                        </li>
                  </ul>
              </section>
        </div>
      `,
      yams: `
          <div class="popup-content">
              <header class="modal__header" onclick="togglePopup('yams')">
                  <h2  class="h2 form-title">Yams</h2>
              </header>
              <div class="modal__content">
              <div class="modal__blocks">
                  <div class="modal__block">
                      <img src="img/projects/yams_1.png" alt="yams">
                      <p>
                      Farky est un jeu de stratégie développé en Java, combinant les règles du Yams et du Farkle. Ce projet universitaire visait à créer une interface graphique interactive en pixel-art, s'éloignant des jeux classiques en ligne de commande. Le concept repose sur un système de dés spéciaux inspiré de Kingdom Come: Deliverance, intégrant une dimension stratégique basée sur la gestion du risque et des probabilités.
                      </p>
                  </div>
                  <div class="modal__block">
                      <p>
                      L’application utilise le design pattern MVC pour séparer la logique métier de l'interface utilisateur. Développé avec JavaFX et CSS, le projet met en œuvre les principes de la programmation orientée objet, notamment via un système de DiceFactory. Le programme gère différents modes de jeu, comme le Solo, le PvP local et un mode observation entre bots, tout en assurant une gestion fluide des interactions et des lancers.
                      </p>
                      <img src="img/projects/yams_2.png" alt="yams">          
                  </div>
                  <div class="modal__block">
                      <img src="img/projects/yams_3.png" alt="yams">
                      <p>
                      Au sein du binôme, j’ai principalement travaillé sur la logique interne, incluant la création des dés et les algorithmes de calcul des scores. J’ai également contribué à l’interface graphique pour garantir une expérience utilisateur fluide. Ce projet m’a permis de maîtriser l'organisation d'un code complexe avec le modèle MVC et de concrétiser mes compétences en programmation Java à travers une application stable et fonctionnelle.
                      </p>
                  </div>
              </div>
          </div>
              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/yevhen-kefa/Yams" target="_blank">Voir sur GitHub</a> </h3>
              <section class="skill">
                  <h3 class="h3 skills-title">Utilisé: </h3>
                  <ul class="skills-list">
                      <li class="skills-item">
                          <img src="img/java.png" alt="Java" />
                          <h5 class="h5">Java</h5>
                      </li>
                  </ul>
              </section>
          </div>
      `,
      codex: `
        <div class="popup-content">
          <header class="modal__header" onclick="togglePopup('codex')">
              <h2  class="h2 form-title">Codex Naturalist</h2>
          </header>
          <div class="modal__content">
              <div class="modal__blocks">
                  <div class="modal__block">
                      <img src="img/projects/codex_menu.png" alt="codex">
                      <p>
                      Dans ce projet, nous avons développé un jeu de cartes en Java Codex Naturalist en équipes de deux. L'objectif du projet était d'apprendre à travailler avec Java dans un environnement de projet en utilisant les bibliothèques fournies par l'université, et à la fin nous devions présenter le code fonctionnel du jeu à un panel d'enseignants.
                      </p>
                  </div>
                  <div class="modal__block">
                      <p>
                      Codex Naturalis est un jeu de société dans lequel les joueurs jouent le rôle d'explorateurs naturels médiévaux. Le but du jeu est de créer le code le plus précieux et le plus harmonieux de découvertes naturelles en collectant et en plaçant des cartes de la flore et de la faune. Le joueur dispose de cartes d'or et de ressources. Le jeu se termine lorsque le jeu de cartes est épuisé ou que l'un des joueurs remplit sa tablette. Ensuite, les points sont calculés et le joueur qui a le plus de points est le gagnant. Les tâches peuvent donner des points supplémentaires pour des conditions spéciales.
                      </p>
                      <img src="img/projects/codex_deb.png" alt="codex">          
                  </div>
                  <div class="modal__block">
                      <img src="img/projects/codex_proces.png" alt="codex">
                      <p>
                      Dans ce projet, j'étais responsable de la conception des cartes, de leur interaction et de leur placement dans la zone de jeu, tandis que mon collègue était chargé de développer la logique et les règles du jeu, de déplacer les cartes et d'interagir avec elles. Nous avons ainsi obtenu une version fonctionnelle du Codex Naturalis.
                      </p>
                  </div>
              </div>
          </div>
          <section class="skill">
          <h3 class="h3 skills-title">Utilisé: </h3>
          <ul class="skills-list">
              <li class="skills-item">
                <img src="img/java.png" alt="Java" />
                <h5 class="h5">Java</h5>
              </li>
          </ul>
      </section>
        </div>
      `,
      silveterna: `
          <div class="popup-content">
              <header class="modal__header" onclick="togglePopup('silveterna')">
                  <h2  class="h2 form-title">SilvEterna</h2>
              </header>
              <div class="modal__content">
                  <div class="modal__blocks">
                      <div class="modal__block">
                          <img src="img/silveterna.png" alt="v">
                          <p>Projet éducatif réalisé en équipe de quatre, avec un délai de 1,5 mois. En tant que chef de projet, j’ai coordonné la création d’un site destiné aux personnes âgées, leur permettant de discuter via un chat interne et d’organiser des événements.</p>
                      </div>
                      <div class="modal__block">
                          <img src="img/projects/silveterna_1.png" alt="silveterna">
                          <p>Le site comprend un système de messagerie en temps réel, un calendrier interactif, et une interface simple, pensée pour l’accessibilité. L’ensemble a été conçu sans modèle préexistant, à partir de zéro.</p>
                      </div>
                      <div class="modal__block">
                          <p>Nous avons utilisé PostgreSQL pour créer une base de données complète. J’ai supervisé le développement du chat, du calendrier, ainsi que l’organisation des tâches techniques. Le projet a représenté un bon équilibre entre complexité fonctionnelle et gestion d’équipe.</p>
                          <img src="img/projects/silveterna_2.png" alt="silveterna">
                      </div>
                      <div class="modal__block">
                          <img src="img/projects/silveterna_3.png" alt="silveterna">
                          <img src="img/projects/silveterna_4.png" alt="silveterna">
                      </div>
                  </div>
              </div>
              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/yevhen-kefa/SilvEterna" target="_blank">Voir sur GitHub</a> </h3>
              <section class="skill">
                  <h3 class="h3 skills-title">Utilisé: </h3>
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
                        <img src="img/javascript.png" alt="JavaScript" />
                        <h5 class="h5">JavaScript</h5>
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
                        <img src="img/MySQL.png" alt="sql" />
                        <h5 class="h5">MySQL</h5>
                      </li>
                      <li class="skills-item">
                        <img src="img/PostgreSQL.png" alt="sql" />
                        <h5 class="h5">PostgreSQL</h5>
                      </li>
                       <li class="skills-item">
                        <img src="img/figma.png" alt="Figma" />
                        <h5 class="h5">Figma</h5>
                      </li>
                    </ul>
              </section>
          </div>
      `

  };

  projects.forEach(project => {
      project.addEventListener('click', () => {
          const projectKey = project.getAttribute('data-project');
          popupContent.innerHTML = descriptions[projectKey];
          popup.style.display = 'flex';
      });
  });

  popup.addEventListener('click', (e) => {
      if (e.target === popup) {
          popup.style.display = 'none';
      }
  });
  const elementToggleFunc = function (elem) {
    elem.classList.toggle('active');
  };


  
});