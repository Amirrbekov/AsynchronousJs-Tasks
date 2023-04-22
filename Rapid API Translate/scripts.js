document.getElementById("translate-form").addEventListener("submit", translated);
document.getElementById("language").onchange = function(){
    // front works
    console.log("Event");
    ui.changeUI();
}

const translate = new Translate(document.getElementById("word").value,document.getElementById("language").value);
const ui = new UI();

function translated(e){

    translate.changeParameters(document.getElementById("word").value,document.getElementById("language").value);

    translate.translated(function(err,response){
        if (err) {
            
            console.log(err);

        }
        else {
            ui.displayTranslate(response);
        }
    });

    e.preventDefault();
}