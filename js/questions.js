// number of questions to ask
var questions_nb=3;

var score=0;
var penalite=0;
var recommencer=1;

var qst=new Array();// <== NE PAS MODIFIER !!    
		// La variable n représente le numéro de la question et est incrémenté (n++;) à chaque nouvelle question.
		//Cela permet de supprimer, d'ajouter ou de déplacer des questions sans devoir modifier les numéros des questions
var n=-1;			 // <== NE PAS MODIFIER !!

var questions = [
    {
    "text": "Qu'est-ce que le paludisme ?",
    "time": 15,
    "answers": [ 
            {
                "text" : "Un medicament",
                "comment": "Le paludisme est une maladie.",
                "correct": false,
            },
            {
                "text" : "Un maladie",
                "comment": "Bravo !",
                "correct": true,
            },
            {
                "text" : "Une mouche",
                "comment": "Le paludisme est une maladie.",
                "correct": false,
            },
            {
                "text" : "Un moustique",
                "comment": "Le paludisme est une maladie transmise par un moustique.",
                "correct": false,
            },
        ]
    },    
    {
    "text": "Quelle est la maladie qui cause le plus morts en Afrique?",
    "time": 15,
    "answers": [ 
            {
                "text" : "Le sida",
                "comment": "Le sida est responsable de nombreux d&eacute;c&egrave;s en Afrique, mais c'est le paludisme qui cause le plus de morts.",
                "correct": false,
            },
            {
                "text" : "Le paludisme",
                "comment": "A titre d'exemple, en 2014, le paludisme est responsable de xxx d&eacute;c&egrave;s en Afrique.",
                "correct": true,
            },
            {
                "text" : "Ebola",
                "comment": "L'&eacute;pid&eacute;mie due au virus Ebola a &eacute;t&eacute; responsable de beaucoup de d&eacute;c&egrave;s en 2014-2015, mais c'est le paludisme qui cause le plus de morts en Afrique.",
                "correct": false,
            },
            {
                "text" : "Le diab&egrave;te",
                "comment": "C'est le paludisme qui est responsable du plus grand nombre de morts en Afrique.",
                "correct": false,
            },
        ]
    },
    {
    "text": "Que faut-il faire quant on pense avoir le paludisme ?",
    "time": 15,
    "answers": [ 
            {
                "text" : "Allez consulter un medecin.",
                "comment": "Bravo. D&egrave;s que vous pensez avoir un palu, allez rapidement consulter un m&eacute;decin.",
                "correct": true,
            },
            {
                "text" : "Allez consulter un guérisseur.",
                "comment": "Seul un médecin peut diagnostique avec certitude le paludisme.",
                "correct": false,
            },
            {
                "text" : "Attendre que ca passe avec le temps.",
                "comment": "On peut mourrir du paludisme si celui-ci n'est pas soign&eacute; a temps. Il faut allez consultez un mvdecin d&egrave;s l'appariation de symptomes.",
                "correct": false,
            },
        ]
    },
    {
    "text" : "Quels sont les symptomes possilbles du paludisme ?",
    "time": 15,
    "answers": [ 
            {
                "text" : "Chute des cheveux",
                "comment": "Êtes-vous surs ? Voici quelques symptomes du paludisme : Fi&egrave;vre, vomisements, fatigue, diarrh&eacute;e, mal de tete...",
                "correct": false,
            },
            {
                "text" : "Fi&egrave;vre, vomisements, fatigue, diarrh&eacute;e",
                "comment": "Exact. Le mal de tete peut etre aussi un symptome.",
                "correct": true,
            },
            {
                "text" : "Douleur aux orteils.",
                "comment": "Voici quelques symptomes du paludisme : Fi&egrave;vre, vomisements, fatigue, diarrh&eacute;e, mal de tete...",
                "correct": false,
            },
        ]
    },
    {
    "text" : "Quel animal transmet le paludisme ?",
    "time": 15,
    "answers": [ 
            {
                "text" : "Une mouche",
                "comment": "C'est un moustique qui transmete le paludisme.",
                "correct": false,
            },
            {
                "text" : "Une abeille",
                "comment": "C'est un moustique qui transmete le paludisme.",
                "correct": false,
            },
            {
                "text" : "Un serpent",
                "comment": "C'est un moustique qui transmete le paludisme.",
                "correct": false,
            },
            {
                "text" : "Un moustique",
                "comment": "Exact ! On dit que le moustique est le 'vecteur' du paludisme.",
                "correct": true,
            },
        ]
    },
    {
    "text" : "Comment se prot&eacute;ger efficacement du paludisme lorsque vous dormez ?",
    "time": 15,
    "answers": [ 
            {
                "text" : "Avec une moustiquaire impr&eacute;gn&eacute;e.",
                "comment": "La moustiquaire impr&eacute;gn&eacute;e est la meilleure potection. Veiillez &agrave; ce qu'elle soit sans trou et bien fix&eacute;e autour du matelas",
                "correct": true,
            },
            {
                "text" : "En prenant des m&eacute;dicaments contre le paludisme.",
                "comment": "Prendre des m&eacute;dicaments pour se protéger du paludisme n'est pas une solution àgrave; long terme. La moustiquaire impr&eacute;gn&eacute;e est la solution la plus efficace et la plus &eacute;conomique.",
                "correct": false,
            },
            {
                "text" : "Avec un appareil qui produit des ultrasons.",
                "comment": "Ce genre d'appareil n'ont jamais montr&eacute; leur efficacit&eacute; pour lutter contre les moustiques. La moustiquaire impr&eacute;gn&eacute;e est la solution la plus efficace et la plus &eacute;conomique.",
                "correct": false,
            },
            {
                "text" : "Avec une tapette &agrave; mouche.",
                "comment": "La moustiquaire impr&eacute;gn&eacute;e est la solution la plus efficace et la plus &eacute;conomique.",
                "correct": false,
            },
        ]
    },
    {
    "text" : "En anglais, comment appelle-t-on le paludisme ?",
    "time": 15,
    "answers": [ 
            {
                "text" : "Maludisme",
                "comment": "En anglais, paludisme se traduit par malaria.",
                "correct": false,
            },
            {
                "text" : "Palu",
                "comment": "'Palu' est l'abbréviation française de paludisme. En anglais, paludisme se traduit par malaria.",
                "correct": false,
            },
            {
                "text" : "Palaria",
                "comment": "En anglais, paludisme se traduit par malaria.",
                "correct": false,
            },
            {
                "text" : "Malaria",
                "comment": "Bravo. Vous avez raison.",
                "correct": true,
            },
        ]
    },
    {
    "text" : "Quel esp&egrave;ce de moustique transmet de le paludisme ?",
    "time": 30,
    "answers": [ 
            {
                "text" : "Paluph&egrave;le.",
                "comment": "L'esp&egrave;ce de moustique qui transmet le paludisme est l'esp&egrave;ce 'anoph&egrave;le'.",
                "correct": false,
            },
            {
                "text" : "Mousticus malarius.",
                "comment": "L'esp&egrave;ce de moustique qui transmet le paludisme est l'esp&egrave;ce 'anoph&egrave;le'.",
                "correct": false,
            },
            {
                "text" : "Anoph&egrave;le.",
                "comment": "F&eacute;liciation ! Cette question eacute;tait difficile.",
                "correct": true,
            },
            {
                "text" : "Mousticus malariae.",
                "comment": "L'esp&egrave;ce de moustique qui transmet le paludisme est l'esp&egrave;ce 'anoph&egrave;le'.",
                "correct": false,
            },
        ]
    },
    {
    "text" : "Quel examen permet de d&eacute;terminer si on a le paludisme ?",
    "time": 15,
    "answers": [ 
            {
                "text" : "La goutte large.",
                "comment": "La goutte &eacute;paisse permet de diagnostiquer une paludisme.",
                "correct": false,
            },
            {
                "text" : "Une &eacute;chographie.",
                "comment": "La goutte &eacute;paisse permet de diagnostiquer une paludisme.",
                "correct": false,
            },
            {
                "text" : "La goutte &eacute;paisse.",
                "comment": "La goutte &eacute;paisse qui permet de détecter dans le sang la pr&eacute;sence de parasite donc de diagnostiquer un paludisme.",
                "correct": true,
            },
        ]
    },
    {
    "text" : "Quel est le parasite responsable de la majorit&eacute; des cas de paludisme au Congo ?",
    "time": 15,
    "answers": [ 
            {
                "text" : "Plasmodium congolum.",
                "comment": "La bonne r&eacute;ponse est Plasmodium falciparum.",
                "correct": false,
            },
            {
                "text" : "Plasmodium falciparum.",
                "comment": "Bravo",
                "correct": true,
            },
            {
                "text" : "Anoph&egrave;le.",
                "comment": "Le parasite responsable du paludisme au Congo est Plasmodium falciparum.",
                "correct": false,
            },
        ]
    }
]


/*
    {
    "text" : "",
    "time": 15,
    "answers": [ 
            {
                "text" : "",
                "comment": "",
                "correct": false,
            },
            {
                "text" : "",
                "comment": "",
                "correct": false,
            },
            {
                "text" : "",
                "comment": "",
                "correct": false,
            },
            {
                "text" : "",
                "comment": "",
                "correct": false,
            },
        ]
    },
*/
