/*
@Name: BADILA Borel Destyno
@Date: 10/11/2015
@Version: 1.1
@Date: 17/11/2015
*/




//Pour que le navigateur prene en compte les assent il suffit: &eacute; pour le assent aigu et &egrave;

var titre="Prenez du plaisir avec EduPalu Fongw@ma !!!";
var consigne="Choisissez la r&eacute;ponse correcte!";
var auteur="&copy; 2015 - Fongwa@ma";
var mix=1;
var nb_q=6; // nombre de questions à poser. Si 0, le programme posera toutes les questions
var penalite=0;
var encore=0;
var recommencer=1;

var qst=new Array();// <== NE PAS MODIFIER !!    
		// La variable n représente le numéro de la question et est incrémenté (n++;) à chaque nouvelle question.
		//Cela permet de supprimer, d'ajouter ou de déplacer des questions sans devoir modifier les numéros des questions
var n=-1;			 // <== NE PAS MODIFIER !!



// question 1
n++;qst[n]=new Array(12);
qst[n][0]="Qu'est-ce que le paludisme ?";//question 1
qst[n][1]="Un medicament";//proposition A
qst[n][2]="Une maladie";//proposition B
qst[n][3]="Une mouche";//proposition C
qst[n][4]="Un moustique";//proposition D
qst[n][5]="B";//[lettre correspondant à la réponse correcte( A,B,C,D)]
qst[n][6]="Le paludisme est une maladie.";//commentaire si option A est cochée
qst[n][7]="Bravo !";//commentaire si option B est cochée
qst[n][8]="Le paludisme est une maladie.";//commentaire si option C est cochée
qst[n][9]="Le paludisme est une maladie transmise par un moustique.";//commentaire si option D est cochée
qst[n][10]="00:15";//délai pour répondre à la question
qst[n][11]="";//document annexé

// question 2
n++;qst[n]=new Array(12);
qst[n][0]="Quelle est la maladie qui cause le plus morts en Afrique?";//question 1
qst[n][1]="Le sida.";//proposition A
qst[n][2]="Le paludisme.";//proposition B
qst[n][3]="Ebola.";//proposition C
qst[n][4]="Le diab&egrave;te.";//proposition D
qst[n][5]="B";//[lettre correspondant à la réponse correcte( A,B,C,D)]
qst[n][6]="Le sida est responsable de nombreux d&eacute;c&egrave;s en Afrique, mais c'est le paludisme qui cause le plus de morts.";//commentaire si option A est cochée
qst[n][7]="A titre d'exemple, en 2014, le paludisme est responsable de xxx d&eacute;c&egrave;s en Afrique.";//commentaire si option B est cochée
qst[n][8]="L'&eacute;pid&eacute;mie due au virus Ebola a &eacute;t&eacute; responsable de beaucoup de d&eacute;c&egrave;s en 2014-2015, mais c'est le paludisme qui cause le plus de morts en Afrique.";//commentaire si option C est cochée
qst[n][9]="C'est le paludisme qui est responsable du plus grand nombre de morts en Afrique.";//commentaire si option D est cochée
qst[n][10]="00:15";//délai pour répondre à la question
qst[n][11]="";//document annexé

// question 3
n++;qst[n]=new Array(12);
qst[n][0]="Que faut-il faire quant on pense avoir le paludisme ?";//question 1
qst[n][1]="Allez consulter un medecin.";//proposition A
qst[n][2]="S'automedicater.";//proposition B
qst[n][3]="Attendre que ca passe avec le temps.";//proposition C
qst[n][4]="";//proposition D
qst[n][5]="A";//[lettre correspondant à la réponse correcte( A,B,C,D)]
qst[n][6]="Bravo. D&egrave;s que vous pensez avoir un palu, allez rapidement consulter un m&eacute;decin.";//commentaire si option A est cochée
qst[n][7]="Seul un médecin peut diagnostique avec certitude le paludisme.";//commentaire si option B est cochée
qst[n][8]="On peut mourrir du paludisme si celui-ci n'est pas soign&eacute; a temps. Il faut allez consultez un mvdecin d&egrave;s l'appariation de symptomes.";//commentaire si option C est cochée
qst[n][9]="";//commentaire si option D est cochée
qst[n][10]="00:15";//délai pour répondre à la question
qst[n][11]="";//document annexé

// question 4
n++;qst[n]=new Array(12);
qst[n][0]="Quels sont les symptomes possilbles du paludisme ?";//question 1
qst[n][1]="Chute des cheveux";//proposition A
qst[n][2]="Fi&egrave;vre, vomisements, fatigue, diarrh&eacute;e";//proposition B
qst[n][3]="Douleur aux orteils.";//proposition C
qst[n][4]="";//proposition D
qst[n][5]="B";//[lettre correspondant à la réponse correcte( A,B,C,D)]
qst[n][6]="Êtes-vous surs ? Voici quelques symptomes du paludisme : Fi&egrave;vre, vomisements, fatigue, diarrh&eacute;e, mal de tete...";//commentaire si option A est cochée
qst[n][7]="Exact. Le mal de tete peut etre aussi un symptome.";//commentaire si option B est cochée
qst[n][8]="Voici quelques symptomes du paludisme : Fi&egrave;vre, vomisements, fatigue, diarrh&eacute;e, mal de tete...";//commentaire si option C est cochée
qst[n][9]="";//commentaire si option D est cochée
qst[n][10]="00:15";//délai pour répondre à la question
qst[n][11]="";//document annexé

// question 5
n++;qst[n]=new Array(12);
qst[n][0]="Quel animal transmet le paludisme ?";//question 1
qst[n][1]="Une mouche.";//proposition A
qst[n][2]="Une abeille.";//proposition B
qst[n][3]="Un serpent.";//proposition C
qst[n][4]="Un moustique.";//proposition D
qst[n][5]="D";//[lettre correspondant à la réponse correcte( A,B,C,D)]
qst[n][6]="C'est un moustique qui transmete le paludisme.";//commentaire si option A est cochée
qst[n][7]="C'est un moustique qui transmete le paludisme.";//commentaire si option B est cochée
qst[n][8]="C'est un moustique qui transmete le paludisme.";//commentaire si option C est cochée
qst[n][9]="Exact ! On dit que le moustique est le 'vecteur' du paludisme.";//commentaire si option D est cochée
qst[n][10]="00:15";//délai pour répondre à la question
qst[n][11]="";//document annexé

// question 6
n++;qst[n]=new Array(12);
qst[n][0]="Comment se prot&eacute;ger efficacement du paludisme lorsque vous dormez ?";//question 1
qst[n][1]="Avec une moustiquaire impr&eacute;gn&eacute;e.";//proposition A
qst[n][2]="En prenant des m&eacute;dicaments contre le paludisme.";//proposition B
qst[n][3]="Avec un appareil qui produit des ultrasons.";//proposition C
qst[n][4]="Avec une tapette &agrave; mouche.";//proposition D
qst[n][5]="A";//[lettre correspondant à la réponse correcte( A,B,C,D)]
qst[n][6]="La moustiquaire impr&eacute;gn&eacute;e est la meilleure potection. Veiillez &agrave; ce qu'elle soit sans trou et bien fix&eacute;e autour du matelas.";//commentaire si option A est cochée
qst[n][7]="Prendre des m&eacute;dicaments pour se protéger du paludisme n'est pas une solution àgrave; long terme. La moustiquaire impr&eacute;gn&eacute;e est la solution la plus efficace et la plus &eacute;conomique.";//commentaire si option B est cochée
qst[n][8]="Ce genre d'appareil n'ont jamais montr&eacute; leur efficacit&eacute; pour lutter contre les moustiques. La moustiquaire impr&eacute;gn&eacute;e est la solution la plus efficace et la plus &eacute;conomique.";//commentaire si option C est cochée
qst[n][9]="La moustiquaire impr&eacute;gn&eacute;e est la solution la plus efficace et la plus &eacute;conomique.";//commentaire si option D est cochée
qst[n][10]="00:15";//délai pour répondre à la question
qst[n][11]="";//document annexé

// question 7
n++;qst[n]=new Array(12);
qst[n][0]="En anglais, comment appelle-t-on le paludisme ?";
qst[n][1]="Maludisme.";
qst[n][2]="Palu.";
qst[n][3]="Palaria.";
qst[n][4]="Malaria.";
qst[n][5]="D";
qst[n][6]="En anglais, paludisme se traduit par malaria.";
qst[n][7]="'Palu' est l'abbréviation française de paludisme. En anglais, paludisme se traduit par malaria.";
qst[n][8]="En anglais, paludisme se traduit par malaria.";
qst[n][9]="Bravo. Vous avez raison.";
qst[n][10]="00:15";
qst[n][11]="http://fr.wilogo.com/blog/2007/logos-des-navigateurs-internet/";


// question 8
n++;qst[n]=new Array(12);
qst[n][0]="Quel esp&egrave;ce de moustique transmet de le paludisme ?";
qst[n][1]="Paluph&egrave;le.";
qst[n][2]="Mousticus malarius.";
qst[n][3]="Anoph&egrave;le.";
qst[n][4]="Mousticus malariae.";
qst[n][5]="C";
qst[n][6]="L'esp&egrave;ce de moustique qui transmet le paludisme est l'esp&egrave;ce 'anoph&egrave;le'.";
qst[n][7]="L'esp&egrave;ce de moustique qui transmet le paludisme est l'esp&egrave;ce 'anoph&egrave;le'.";
qst[n][8]="F&eacute;liciation ! Cette question eacute;tait difficile.";
qst[n][9]="L'esp&egrave;ce de moustique qui transmet le paludisme est l'esp&egrave;ce 'anoph&egrave;le'.";
qst[n][10]="00:30";
qst[n][11]="";

// question 8
n++;qst[n]=new Array(12);
qst[n][0]="Quel examen permet de d&eacute;terminer si on a le paludisme ?";
qst[n][1]="La goutte large.";
qst[n][2]="Une &eacute;chographie.";
qst[n][3]="La goutte &eacute;paisse.";
qst[n][4]="";
qst[n][5]="C";
qst[n][6]="La goutte <b>&eacute;paisse</b> permet de diagnostiquer une paludisme.";
qst[n][7]="La goutte &eacute;paisse permet de diagnostiquer une paludisme.";
qst[n][8]="La goutte &eacute;paisse qui permet de détecter dans le sang la pr&eacute;sence de parasite donc de diagnostiquer un paludisme.";
qst[n][9]="";
qst[n][10]="00:15";
qst[n][11]="";


// question 9
n++;qst[n]=new Array(12);
qst[n][0]="Quel est le parasite responsable de la majorit&eacute; des cas de paludisme au Congo ?";
qst[n][1]="Plasmodium congolum.";
qst[n][2]="Plasmodium falciparum.";
qst[n][3]="Anoph&egrave;le.";
qst[n][4]="";
qst[n][5]="B";
qst[n][6]="La bonne r&eacute;ponse est Plasmodium falciparum.";
qst[n][7]="Bravo.";
qst[n][8]="'anoph&egrave;le' est l'esp&egrave;ce de moustique qui transmet le paludisme. Le parasite responsable du paludisme au Congo est Plasmodium falciparum.";
qst[n][9]="";
qst[n][10]="00:15";
qst[n][11]="";

/* ajoutez d'autres questions en respectant la même procédure.
// question xx
n++;qst[n]=new Array(12);
qst[n][0]="";//question 6
qst[n][1]="";
qst[n][2]="";
qst[n][3]="";
qst[n][4]="";
qst[n][5]="";
qst[n][6]="";
qst[n][7]="";
qst[n][8]="";
qst[n][9]="";
qst[n][10]="";
qst[n][11]="";

*/

