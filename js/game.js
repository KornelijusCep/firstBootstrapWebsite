$(document).ready(function() {

  const message = document.querySelector('.message');
  const input = document.querySelector('input');
  const button = document.querySelector('.button');
  const lives = document.querySelector('#lives');
  const points = document.querySelector('#points');
  
  // VISI ZODZIAI
  let words = ['kompiuteris', 'procesorius', 'diskas', 'monitorius', 'ausintuvas', 'klaviatura', 'pele', 'kamera'];
  // GYVYBES
  let leftLives;
  // NAUJAS ZODIS
  let newWord = "";
  // SUMAISYTAS NAUJAS ZODIS
  let scrambledWord = "";
  // BOOLEAN ZAIDIMO EIGAI TIKRINTI AR DAR ZAIDZIAMA
  let startGame = false;
  // SURINKTI TASKAI
  let collectedPoints;

  const generateNewWords = () => {
    let randomNumber = Math.floor(Math.random() * words.length);
    let generatedWords = words[randomNumber];
    //alert(randomNumber);
    //alert(generatedWords);
    //console.log(generatedWords.split(""));
    return generatedWords;
  }
  const scrambleNewWord = (arr) => {
    for(let i = arr.length-1; i>=0; i--){
      let temp = arr[i];
      /*console.log(temp);*/
      let j = Math.floor(Math.random()*(i+1));
      /*console.log(i);
      console.log(j);*/

      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  button.addEventListener('click', function() {

    if(!startGame){

      collectedPoints = parseInt(document.getElementById("points").innerHTML);
      leftLives = 3; 
      startGame = true;
      newWord = generateNewWords();
      scrambledWord = scrambleNewWord(newWord.split(""));
      /*console.log(randoWords);*/

      message.innerHTML = scrambledWord;
      lives.innerHTML = leftLives;
      document.getElementById("points").innerHTML = collectedPoints;
      button.innerHTML = "SPĖTI ŽODĮ";
    }
    else {
      let inputWord = input.value;
      if(inputWord == newWord){
        /*console.log('Atspejote');*/
        startGame = false;
        collectedPoints += leftLives;
        
        message.innerHTML = `Atspejote zodi - ${newWord}`;
        document.getElementById("points").innerHTML = collectedPoints;
        button.innerHTML = "Naujas zaidimas?";  
      }
      else {
        //console.log('Bandykite dar karta!');
        leftLives = leftLives - 1;
        lives.innerHTML = leftLives;


        if(leftLives == 0)
        {
          startGame = false;
          collectedPoints = 0;
          message.innerHTML = `Pralaimejote. Zodis buvo: ${newWord}`;
          document.getElementById("points").innerHTML = collectedPoints;
          button.innerHTML = "Naujas zaidimas?"
        }
      }
    }
    
  })

})