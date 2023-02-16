import {React , useState}from "react";
import "../../assets/css/cv.css";
import pdp from "../../assets/svg/react.png";
function Cv() {
   
  const [affichage, setaffichage] = useState(false)
  const [affichage1, setaffichage1] = useState(false)
  const [affichage2, setaffichage2] = useState(false)
   
  const funcAffichage  = ()=>{
    
    setaffichage(!affichage)
 
  }
  const funcAffichage1  = ()=>{
    
    setaffichage1(!affichage1)
    
  }
  const funcAffichage2  = ()=>{
    
    setaffichage2(!affichage2)
     
  }
    
  return (
    <div className="main">
      <div className="content1">
        <h1 onClick={funcAffichage} className="cv">Circulium vital</h1>
        <img className="pdp" src={pdp} width={220} />

        <div className="cv1">
          <h2 className="white">Qualité</h2>
          <ul>
            <li>Sérieux</li>
            <li>Créatif</li>

            <li>Autonomie</li>
            <li>Capacité d’analyse</li>
            <li>Être capable de bien</li>

            <li>Communiquer</li>

            <li>Gestion du stress</li>

            <li>Motivée</li>

            <li>Responsable</li>
          </ul>
        </div>

        <div className="cv1">
          <h2 className="white">Compétence</h2>
          <ul>
            <li>React Js</li>
            <li>NodeJs</li>
            <li>Javascript</li>

            <li>Css</li>
            <li>Scss</li>
          </ul>
        </div>
      </div>

      <div className="content2">
        <div>
          <h2 className="pers"> PROFIL PERSONNEL</h2>
          <p>
            Actuellement étudiant et en recherche active d'un emploi, je suis
            extrêmement motivé à développer constamment mes compétences et à
            évoluer professionnellement. Je suis prêt à mettre mes connaissances
            à profit pour relever de nouveaux défis
          </p>
        </div>
        <div className="content3">
          <div>
            <h2 onClick={funcAffichage} className="information" >  
              Information
            </h2>
            {affichage && <div> <p>Nom: Randriambololomanana</p>
    <p> Nom: Niriantsoa Finoana Sambatra</p>
    <p> Telephone: 0347993137</p>
    <p> Adrresse: FinoanaRandri@gmail.com</p></div>} 
            
          </div>

          <div className="educ">
            <h2 onClick={funcAffichage1} className="education"> EDUCATION</h2>
            {affichage1 && <div> <p>2020 - 2021</p>
            <p>Lycée Des Séraphins Itaosy</p>
            <p>Diplôme de Baccalauréat A2 (Mention Bien)</p>
            <p>2021 - 2022</p>
            <p>
              ESTI Antanimena Deuxième année (L2) Parcours informatique.
              Intégration et développement
            </p></div>} 
          </div>

          <div className="exp">
            <h2 onClick={funcAffichage2} className="expreience">EXPERIENCE</h2>
             {affichage2 && <div>
              <p>Participation à la réalisation de projets web Esti(2021-2022)</p>
              
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cv;
