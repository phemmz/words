/*** function called words that takes in a string argument
 and counts the occurences of each word in the string ***/
let words = (text) => {

//declare a variable called splittedWords to hold an array of splitted words
	let splittedWords;

//check if the argument supplied contains multiline
	if (/\r|\n/.exec(text)) {
//if it does split the argument using the multiline as the delimiter
  		splittedWords = text.split("\n");
	}
//check iif the argument supplied contains tabs
	else if (/\r|\t/.exec(text)) {
//if it does split the argument using the tabs as the delimiter
  		splittedWords = text.split("\t");
	}
//else split the argument using " " as delimiter
	else {
  		splittedWords = text.split(" ");
	}
//initialize an empty associative array
	let wordCounter = {};
//to handle property that exist on object's prototype
	if(splittedWords.indexOf('toString')) {
  		splittedWords[splittedWords.indexOf('toString')] = "ToString";
	}

//loop through each word in splittedWords, if the word is in wordCounter increase the number, if not set it equal to 1
	for (let counter=0; counter<splittedWords.length; counter++){
  		if(wordCounter[splittedWords[counter]] === undefined) {
    		wordCounter[splittedWords[counter]] = 1;
  		}
  		else{
    		wordCounter[splittedWords[counter]]++;
  		}
	}
//delete if available "" in wordCounter;
	delete wordCounter[""];
//return wordCounter as a JSON object
	return wordCounter;
}