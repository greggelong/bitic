//let txt ="What sphinx of cement and aluminum bashed open their skulls and ate up their brains and imagination? Moloch! Solitude! Filth! Ugliness! Ashcans and unobtainable dollars! Children screaming under the stairways! Boys sobbing in armies! Old men weeping in the parks! Moloch! Moloch! Nightmare of Moloch! Moloch the loveless! Mental Moloch! Moloch the heavy judger of men! Moloch the incomprehensible prison! Moloch the crossbone soulless jailhouse and Congress of sorrows! Moloch whose buildings are judgment! Moloch the vast stone of war! Moloch the stunned governments! Moloch whose mind is pure machinery! Moloch whose blood is running money! Moloch whose fingers are ten armies! Moloch whose breast is a cannibal dynamo! Moloch whose ear is a smoking tomb! Moloch whose eyes are a thousand blind windows! Moloch whose skyscrapers stand in the long streets like endless Jehovahs! Moloch whose factories dream and croak in the fog! Moloch whose smoke-stacks and antennae crown the cities! Moloch whose love is endless oil and stone! Moloch whose soul is electricity and banks! Moloch whose poverty is the specter of genius! Moloch whose fate is a cloud of sexless hydrogen! Moloch whose name is the Mind! Moloch in whom I sit lonely! Moloch in whom I dream Angels! Crazy in Moloch! Cocksucker in Moloch! Lacklove and manless in Moloch! Moloch who entered my soul early! Moloch in whom I am a consciousness without a body! Moloch who frightened me out of my natural ecstasy! Moloch whom I abandon! Wake up in Moloch! Light streaming out of the sky! Moloch! Moloch! Robot apartments! invisible suburbs! skeleton treasuries! blind capitals! demonic industries! spectral nations! invincible madhouses! granite cocks! monstrous bombs! They broke their backs lifting Moloch to Heaven! Pavements, trees, radios, tons! lifting the city to Heaven which exists and is everywhere about us! Visions! omens! hallucinations! miracles! ecstasies! gone down the American river! Dreams! adorations! illuminations! religions! the whole boatload of sensitive bullshit! Breakthroughs! over the river! flips and crucifixions! gone down the flood! Highs! Epiphanies! Despairs! Ten years’ animal screams and suicides! Minds! New loves! Mad generation! down on the rocks of Time! Real holy laughter in the river! They saw it all! the wild eyes! the holy yells! They bade farewell! They jumped off the roof! to solitude! waving! carrying flowers! Down to the river! into the street!"
//let txt ="I saw the best minds of my generation destroyed by madness, starving hysterical naked, dragging themselves through the streets at dawn looking for an angry fix, angelheaded hipsters burning for the ancient heavenly connection to the starry dynamo in the machinery of night ";
//let txt1 ="I saw the best minds of my generation destroyed by madness"
//let txt= "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair."
//let txt ="the theremin is theirs. ok? yes, it is. this is a theremin."
let order = 4;
let ngrams = {};
let button;
let foo = new p5.Speech();
let anatext = "hello";
let textlen = 0;

let scroll = 0;

let textindex = 0;
let textstart = 0;
let texta = ["#", "*"];
let s1 =3
let s2 =4
let txt;
let ld;
// javascript object ngram and array that follows it

function preload() {
 ld = loadStrings("text3.txt");
}
function setup() {
  cnv = createCanvas(800, 800);
  cnv.parent("sketch-holder");
  button = createButton("generate");
  button.mouseReleased(markovit);
  textSize(20);
  background(0);
  fill(255);
  ellipse(300, 300, 50, 50);
  frameRate(6);
  let txtd = ld.join(" ");
  txt =txtd.replace(/[\/#$%\^&\*;:{}=\-_`'"~()]/g,"")// take out some punctuation not .?!,

  // make language model
  for (let i = 0; i <= txt.length - order; i++) {
    let gram = txt.substring(i, i + order);

    if (!ngrams[gram]) {
      //when I find a new n gram make an array to be the value of the key
      ngrams[gram] = [];
    }
    // always push the the character that follows the n gram
    ngrams[gram].push(txt.charAt(i + order));
  }
  print(ngrams);
}

function draw() {
  background(0);

  for (let x = 0; x < width; x += 1) {
    let y = map(
      sin(radians(x * s1 + scroll) + sin(radians(x *s2 + scroll))),
      -1,
      1,
      760,
      40
    );
    //fill255,255,0);
    // ellipse(x,y,20,20);
    fill(0, 255, 0);
    noStroke();
    text(texta[textindex % texta.length], x * 22, y);
    textindex++;
    //fill(255,255,0,10);
    //ellipse(x,y,random(170),random(170));
  }
  scroll += 5;
  textstart++;
  if (textstart >= texta.length) {
    textstart = 0;
  }
  textindex = textstart;
  //print(textindex)
}

function markovit() {
  // algorithm that generates the text
  
  let keys = Object.keys(ngrams)
  let currentGram = random(keys)
  //let currentGram = txt.substring(0, order);
  //let currentGram ="the"
  print(currentGram);
  let result = currentGram;

  for (let i = 0; i < 125; i++) {
    let possibilities = ngrams[currentGram];

    if (!possibilities) {
      print("no possibilities");
      break; //incase it is undifined
    }

    let next = random(possibilities);

    result += next;

    // set current gram to the n gram of the text you are createing
    let len = result.length;

    currentGram = result.substring(len - order, len);
  }

  texta = result.split("");

  createP(result);
  foo.speak(result);
  s1 = random(1,10);
  s2 = random(1,10)
  print(s1,s2)
}