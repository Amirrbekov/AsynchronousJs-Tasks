function Translate(word,lang){
  this.apikey = "YOUR KEY";
  this.host = "YOUR HOST";
  this.word = word;
  this.lang = lang;

  // XHR object

  this.xhr = new XMLHttpRequest();

}

Translate.prototype.translated = function(callback){
  const endpoint = `https://nlp-translation.p.rapidapi.com/v1/translate?rapidapi-key=${this.apikey}&x-rapidapi-host=${this.host}&text=${this.word}&to=${this.lang}&from=tr`;

  this.xhr.open("GET",endpoint);

  this.xhr.onload = () =>{
      if(this.xhr.status === 200) {
          const json = JSON.parse(this.xhr.responseText);

          if(json.translated_text.de){
            const text = json.translated_text.de;
            callback(null,text);
          }
          if(json.translated_text.en){
            const text = json.translated_text.en;
            callback(null,text);
          }

      }else {
          callback("Error",null);
      }
  }
  this.xhr.send();
};

Translate.prototype.changeParameters = function(newWord,newLang) {
  this.word = newWord;
  this.lang = newLang; 
}