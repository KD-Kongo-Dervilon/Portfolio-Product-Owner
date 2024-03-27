import Image1 from "../../assets/testimonial1.png";
import Image2 from "../../assets/testimonial2.png";
import Image3 from "../../assets/testimonial3.png";
import Image4 from "../../assets/testimonial4.png";
import Image5 from "../../assets/testimonial5.png";
import Image6 from "../../assets/testimonial6.png";
import Image7 from "../../assets/testimonial7.png";
import Image8 from "../../assets/testimonial8.png";
import Image9 from "../../assets/testimonial9.png";
import Image10 from "../../assets/testimonial10.png";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10];

const Data = [
    {
        id: 1,
        author: "Maîté Chamerois",
        title: "Gérez un sprint du début à la fin",
        description: "La compréhension du produit est bonne. Bonne capacité de répartition du projet en itérations."
    },
    {
        id: 2,
        author: "Daryan Colard",
        title: "Managez des imprévus durant un sprint",
        description: "Soutenance satisfaisante permettant de présenter la démarche suivie pour répondre aux différents problèmes rencontrés."
    },
    {
        id: 3,
        author: "Romain Dassy",
        title: "Entretenez votre Product Backlog",
        description: "La présentation montre les différentes étapes de la review (ce qui a été fait, démo, et les prochaines releases)."
    },
    {
        id: 4,
        author: "Cédric Compagnon",
        title: "Convertissez les visiteurs d'un site e-commerce en prospects",
        description: "Sans explication fortuite, la posture de l'apprenant concernant les livrables est à la hauteur de ce qui est demandé."
    },
    {
        id: 5,
        author: "Chloé Pagès",
        title: "Élaborez une stratégie de communication pour la release d'une nouvelle fonctionnalité",
        description: "Bonne soutenance. Ton de voix dynamique et bon timing. Jeu de rôle respecté."
    },
    {
        id: 6,
        author: "Carine Renaud",
        title: "Élaborez une stratégie de communication pour la release d'une nouvelle fonctionnalité",
        description: "Dervilon m'a présenté un story mapping du prototype de qualité."
    },
    {
        id: 7,
        author: "Cyril Cieslak",
        title: "Présentez un projet à des investisseurs",
        description: "L'étudiant s'est appuyé sur sa vision produit, ses objectifs et ses contraintes pour réaliser son étude de faisabilité."
    },
    {
        id: 8,
        author: "Eddy Noberto",
        title: "Gérez la conception du site internet d'une association",
        description: "Mbissi a réussi à déterminer les ressources nécessaires au projet en utilisant une méthodologie en cascade, en fournissant un cahier des charges complet."
    },
    {
        id: 9,
        author: "Bruno Paulet",
        title: "Accompagnez votre équipe dans les sprints de développement d'un site e-commerce",
        description: "Très bon travail réalisé par Dervilon, restitution professionnelle et sérieuse. La présentation orale est préparée, claire et dans les temps."
    },
    {
        id: 10,
        author: "Bertrand Bloc'H",
        title: "Menez la stratégie produit d'une organisation",
        description: "Lors de notre discussion, tu as répondu avec pertinence et précision à toutes mes questions, ce qui a confirmé que tu maîtrisais parfaitement le projet."
    },
].map((item, index) => ({ ...item, image: images[index] }));

export { Data };
