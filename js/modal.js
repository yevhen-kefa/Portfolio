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
                          <p>Dans ce projet, nous avons développé un jeu en Python Qix en équipes de deux. Le but de ce projet était d'apprendre à travailler avec des objets en Python en utilisant la bibliothèque fltk (une bibliothèque conçue pour simplifier le travail avec les fenêtres et les objets), et à la fin nous devions présenter le code de travail du jeu à un comité d'enseignants. </p>
                      </div>
                      <div class="modal__block">
                          <img src="img/projects/kyoto_1.png" alt="kyoto">
                          <p>Qix est un jeu d'arcade dans lequel les joueurs capturent des parties du plateau de jeu pour créer des zones fermées. Les joueurs contrôlent un « marqueur » qui se déplace sur les bords du terrain et peut y pénétrer en laissant une trace. La tâche du joueur est de capturer un certain pourcentage du terrain tout en évitant le contact avec les ennemis et les obstacles. </p>
                      </div>
                      <div class="modal__block">
                          <p>En conséquence, après plusieurs mois de travail, notre équipe a développé un jeu avec une logique fonctionnelle, des animations fluides et des contrôles réactifs. Au cours du processus de développement, j'étais responsable du mouvement du personnage, de la possibilité de peindre la zone de jeu, du mouvement des ennemis et de l'interaction avec eux. Le deuxième membre de notre équipe a travaillé sur les graphiques, les animations et a contribué à développer l'interaction avec les ennemis.</p>
                          <img src="img/projects/kyoto_2.png" alt="kyoto">
                      </div>
                  </div>
              </div>
              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/yevhen-kefa/Qix#">Voir sur GitHub</a> </h3>
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
      silveterna: `
          <div class="popup-content">
              <header class="modal__header" onclick="togglePopup('silveterna')">
                  <h2  class="h2 form-title">SilvEterna</h2>
              </header>
              <div class="modal__content">
                  <div class="modal__blocks">
                      <div class="modal__block">
                          <img src="img/silveterna.png" alt="v">
                          <p>Dans ce projet, nous avons développé un jeu en Python Qix en équipes de deux. Le but de ce projet était d'apprendre à travailler avec des objets en Python en utilisant la bibliothèque fltk (une bibliothèque conçue pour simplifier le travail avec les fenêtres et les objets), et à la fin nous devions présenter le code de travail du jeu à un comité d'enseignants. </p>
                      </div>
                      <div class="modal__block">
                          <img src="img/projects/silveterna_1.png" alt="silveterna">
                          <p>Qix est un jeu d'arcade dans lequel les joueurs capturent des parties du plateau de jeu pour créer des zones fermées. Les joueurs contrôlent un « marqueur » qui se déplace sur les bords du terrain et peut y pénétrer en laissant une trace. La tâche du joueur est de capturer un certain pourcentage du terrain tout en évitant le contact avec les ennemis et les obstacles. </p>
                      </div>
                      <div class="modal__block">
                          <p>En conséquence, après plusieurs mois de travail, notre équipe a développé un jeu avec une logique fonctionnelle, des animations fluides et des contrôles réactifs. Au cours du processus de développement, j'étais responsable du mouvement du personnage, de la possibilité de peindre la zone de jeu, du mouvement des ennemis et de l'interaction avec eux. Le deuxième membre de notre équipe a travaillé sur les graphiques, les animations et a contribué à développer l'interaction avec les ennemis.</p>
                          <img src="img/projects/silveterna_2.png" alt="silveterna">
                      </div>
                      <div class="modal__block">
                          <img src="img/projects/silveterna_3.png" alt="silveterna">
                          <img src="img/projects/silveterna_4.png" alt="silveterna">
                      </div>
                  </div>
              </div>
              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/yevhen-kefa/Qix#">Voir sur GitHub</a> </h3>
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
    unesco: `
        <div class="popup-content">
          <header class="modal__header" onclick="togglePopup('unesco')">
              <h2  class="h2 form-title">Grenade</h2>
          </header>
          <div class="modal__content">
              <div class="modal__blocks">
                  <div class="modal__block">
                      <img src="img/projects/Page_d'accueil_unesco.png" alt="unesco">
                      <p>Dans ce projet, nous avons développé, en équipe de 4 personnes, un site web pour présenter la ville de Grenade à l'UNESCO. </p>
                  </div>
                  <div class="modal__block">
                      <p>L'objectif de ce projet était d'apprendre à planifier le processus de développement d'un projet de groupe pendant l'année académique, ainsi que d'apprendre et d'utiliser activement des langages de programmation tels que HTML, CSS, JS, PHP, SQL. Nous avons également appris à créer un design pour un site web et à l'implémenter par la suite.</p>
                      <img src="img/projects/histoire_unesco.png" alt="unesco">
                  </div>
                  <div class="modal__block">
                      <img src="img/projects/gastro_unesco.png" alt="unesco">
                      <p>Dans ce projet, j'ai joué le rôle d'un des développeurs web front-end, et j'ai également participé partiellement à la création du design et du travail back-end. Par conséquent, nous avons maîtrisé dans une certaine mesure des langages de programmation tels que HTML, CSS, JS, PHP, SQL et nous avons appris à les utiliser en pratique en créant un site web.

                      </br>Pour aller sur le site, cliquez <a href="">ici</a>.</p>
                  </div>
              </div>
          </div>
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
                          <p>Dans ce projet, nous avons développé un jeu en Python Qix en équipes de deux. Le but de ce projet était d'apprendre à travailler avec des objets en Python en utilisant la bibliothèque fltk (une bibliothèque conçue pour simplifier le travail avec les fenêtres et les objets), et à la fin nous devions présenter le code de travail du jeu à un comité d'enseignants. </p>
                      </div>
                      <div class="modal__block">
                          <img src="img/projects/tetris_1.png" alt="tetris">
                          <p>Qix est un jeu d'arcade dans lequel les joueurs capturent des parties du plateau de jeu pour créer des zones fermées. Les joueurs contrôlent un « marqueur » qui se déplace sur les bords du terrain et peut y pénétrer en laissant une trace. La tâche du joueur est de capturer un certain pourcentage du terrain tout en évitant le contact avec les ennemis et les obstacles. </p>
                      </div>
                      <div class="modal__block">
                          <p>En conséquence, après plusieurs mois de travail, notre équipe a développé un jeu avec une logique fonctionnelle, des animations fluides et des contrôles réactifs. Au cours du processus de développement, j'étais responsable du mouvement du personnage, de la possibilité de peindre la zone de jeu, du mouvement des ennemis et de l'interaction avec eux. Le deuxième membre de notre équipe a travaillé sur les graphiques, les animations et a contribué à développer l'interaction avec les ennemis.</p>
                          <img src="img/projects/tetris_2.png" alt="tetris">
                      </div>
                  </div>
              </div>
              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/yevhen-kefa/Qix#">Voir sur GitHub</a> </h3>
              <section class="skill">
                  <h3 class="h3 skills-title">Utilisé: </h3>
                  <ul class="skills-list">
                      <li class="skills-item">
                          <img src="img/python.png" alt="Python" />
                          <h5 class="h5">Python</h5>
                      </li>
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
                          <p>Dans ce projet, nous avons développé un jeu en Python Qix en équipes de deux. Le but de ce projet était d'apprendre à travailler avec des objets en Python en utilisant la bibliothèque fltk (une bibliothèque conçue pour simplifier le travail avec les fenêtres et les objets), et à la fin nous devions présenter le code de travail du jeu à un comité d'enseignants. </p>
                      </div>
                      <div class="modal__block">
                          <img src="img/projects/qix_proces.png" alt="Qix">
                          <p>Qix est un jeu d'arcade dans lequel les joueurs capturent des parties du plateau de jeu pour créer des zones fermées. Les joueurs contrôlent un « marqueur » qui se déplace sur les bords du terrain et peut y pénétrer en laissant une trace. La tâche du joueur est de capturer un certain pourcentage du terrain tout en évitant le contact avec les ennemis et les obstacles. </p>
                      </div>
                      <div class="modal__block">
                          <p>En conséquence, après plusieurs mois de travail, notre équipe a développé un jeu avec une logique fonctionnelle, des animations fluides et des contrôles réactifs. Au cours du processus de développement, j'étais responsable du mouvement du personnage, de la possibilité de peindre la zone de jeu, du mouvement des ennemis et de l'interaction avec eux. Le deuxième membre de notre équipe a travaillé sur les graphiques, les animations et a contribué à développer l'interaction avec les ennemis.</p>
                          <img src="img/projects/qix_proces2.png" alt="Qix">
                      </div>
                  </div>
              </div>
              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/yevhen-kefa/Qix#">Voir sur GitHub</a> </h3>
              <section class="skill">
                  <h3 class="h3 skills-title">Utilisé: </h3>
                  <ul class="skills-list">
                      <li class="skills-item">
                          <img src="img/python.png" alt="Python" />
                          <h5 class="h5">Python</h5>
                      </li>
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
                          <p>Dans ce projet, nous avons développé un jeu en Python Qix en équipes de deux. Le but de ce projet était d'apprendre à travailler avec des objets en Python en utilisant la bibliothèque fltk (une bibliothèque conçue pour simplifier le travail avec les fenêtres et les objets), et à la fin nous devions présenter le code de travail du jeu à un comité d'enseignants. </p>
                      </div>
                      <div class="modal__block">
                          <img src="img/projects/primeurpassions_1.png" alt="primeur_passions">
                          <p>Qix est un jeu d'arcade dans lequel les joueurs capturent des parties du plateau de jeu pour créer des zones fermées. Les joueurs contrôlent un « marqueur » qui se déplace sur les bords du terrain et peut y pénétrer en laissant une trace. La tâche du joueur est de capturer un certain pourcentage du terrain tout en évitant le contact avec les ennemis et les obstacles. </p>
                      </div>
                      <div class="modal__block">
                          <p>En conséquence, après plusieurs mois de travail, notre équipe a développé un jeu avec une logique fonctionnelle, des animations fluides et des contrôles réactifs. Au cours du processus de développement, j'étais responsable du mouvement du personnage, de la possibilité de peindre la zone de jeu, du mouvement des ennemis et de l'interaction avec eux. Le deuxième membre de notre équipe a travaillé sur les graphiques, les animations et a contribué à développer l'interaction avec les ennemis.</p>
                          <img src="img/projects/primeurpassions_2.png" alt="primeur_passions">
                      </div>
                      <div class="modal__block">
                          <img src="img/projects/primeurpassions_3.png" alt="primeur_passions">
                          <img src="img/projects/primeurpassions_4.png" alt="primeur_passions">
                      </div>
                  </div>
              </div>
              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/yevhen-kefa/Qix#">Voir sur GitHub</a> </h3>
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
          <h3 class="h3 skills-title"><a class="liens" href="#"> Cimetiere</a> </h3>
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
                          <p>En cours de développement</p>
                      </div>
                  </div>
              </div>
              <h3 class="h3 skills-title"><a class="liens" href="https://github.com/yevhen-kefa/Qix#">Voir sur GitHub</a> </h3>
              <section class="skill">
                  <h3 class="h3 skills-title">Utilisé: </h3>
                  <ul class="skills-list">
                      <li class="skills-item">
                          <img src="img/java.png" alt="Java" />
                          <h5 class="h5">Java</h5>
                      </li>
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
                      <p>Dans ce projet, nous avons développé un jeu de cartes en Java Codex Naturalist en équipes de deux. L'objectif du projet était d'apprendre à travailler avec Java dans un environnement de projet en utilisant les bibliothèques fournies par l'université, et à la fin nous devions présenter le code fonctionnel du jeu à un panel d'enseignants.</p>
                  </div>
                  <div class="modal__block">
                      <p>Codex Naturalis est un jeu de société dans lequel les joueurs jouent le rôle d'explorateurs naturels médiévaux. Le but du jeu est de créer le code le plus précieux et le plus harmonieux de découvertes naturelles en collectant et en plaçant des cartes de la flore et de la faune. Le joueur dispose de cartes d'or et de ressources. Le jeu se termine lorsque le jeu de cartes est épuisé ou que l'un des joueurs remplit sa tablette. Ensuite, les points sont calculés et le joueur qui a le plus de points est le gagnant. Les tâches peuvent donner des points supplémentaires pour des conditions spéciales.</p>
                      <img src="img/projects/codex_deb.png" alt="codex">          
                  </div>
                  <div class="modal__block">
                      <img src="img/projects/codex_proces.png" alt="codex">
                      <p>Dans ce projet, j'étais responsable de la conception des cartes, de leur interaction et de leur placement dans la zone de jeu, tandis que mon collègue était chargé de développer la logique et les règles du jeu, de déplacer les cartes et d'interagir avec elles. Nous avons ainsi obtenu une version fonctionnelle du Codex Naturalis.</p>
                  </div>
              </div>
          </div>
          <h3 class="h3 skills-title"><a class="liens" href="#"> Voire le code de Codex Naturalist</a> </h3>
          <section class="skill">
          <h3 class="h3 skills-title">Utilisé: </h3>
          <ul class="skills-list">
              <li class="skills-item">
                <img src="img/java.png" alt="Java" />
                <h5 class="h5">Java</h5>
              </li>
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