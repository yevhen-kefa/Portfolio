document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.project-item');
  const popup = document.getElementById('popup-container');
  const popupContent = document.getElementById('popup-content');

  const descriptions = {
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
        </div>
      `,
      craftyhub: `
      <div class="popup-content">
      <header class="modal__header" onclick="togglePopup('craftyhub')">
          <h2  class="h2 form-title">CraftyHub</h2>
      </header>
      <div class="modal__content">
          <div class="modal__blocks">
              <div class="modal__block">
                  <img src="img/projects/crafty_log.png" alt="craftyhub">
                  <p>Dans ce travail, nous avons travaillé en trinôme sur Figma, où nous avons appris à créer non seulement un design pour des images statiques, mais aussi à développer un prototype d'applications/sites web en utilisant les capacités de ce programme.</p>
              </div>
              <div class="modal__block">
                  <p>L'objectif de cette tâche était de créer un prototype d'application mobile similaire à un magasin d'articles ménagers et professionnels, de matériaux ou d'outils. Il était nécessaire de créer une maquette reflétant les fonctionnalités et les capacités potentielles de la future application.</p>
                  <img src="img/projects/crafty_accueil.png" alt="craftyhub">
                </div>
              <div class="modal__block">
                  <img src="img/projects/crafty_tuto.png" alt="craftyhub">
                  <p>Mes collègues et moi-même avons travaillé ensemble sur la conception des différentes pages et sur la fonctionnalité, et comme nous travaillions dans le même programme sur le même projet, où aucune connaissance en programmation n'était requise, nous nous sommes occupés chacun de la conception et de la fonctionnalité. En fin de compte, cela nous a permis d'acquérir une bonne expérience des projets d'équipe
                  </br>Pour aller sur le site, cliquez <a href="https://www.figma.com/design/7il8hrETftqWNl2nRuxIqT/craftyhub?node-id=4-1610&t=NDnqEIGkeaZBHF8A-0">ici</a>.</p>
              </div>
              <div class="modal__block">
                  <img src="img/projects/crafty_tuto2.png" alt="craftyhub">
                  <img src="img/projects/crafty_profile.png" alt="craftyhub">
              </div>
          </div>
      </div>
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