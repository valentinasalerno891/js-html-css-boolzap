// Milestone 2
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e, cliccando invia (l'icona o anche con enter), il testo viene aggiunto al thread sopra, come messaggio verde.
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Suggerimento: Utilizzate il template come vi ho fatto vedere a lezione, ma soprattutto state attenti a trovare l'elemento giusto dove inserire (appendere) i valori ricavati dal campo input.
// In poche parole se il mio template prevede un tag p (possibilmente con una determinata classe) dove inserire del testo, devo trovarlo e poi aggiungere il testo!
// Ricordatevi anche che alla fine il clone va pushato (incollato) dove desiderate.

// //faccio il clone del template
// var elemento = $('.template .messaggio').clone();
// //personalizzo il clone aggiungendo del testo dove voglio
// elemento.find('.titolo').append('ciao sono il titolo')
// elemento.find('.descrizione').append('ciao sono lo span');
// //aggiungo la classe
// elemento.addClass('rosso');
//
// //inserisco l'elemento clonato nel DOM
// $('.elementi-copiati').append(elemento);

$("#testoMioMessaggio").keydown(function(){
    if (event.which == 13 || event.keyCode == 13) {
        invioMessaggio();
    }
})



// ***FUNZIONI***

function invioMessaggio(){
    // 1 step -- prendo il valore:
    var valore = $("#testoMioMessaggio").val();
    // 2 step -- creo clone del template (parto da .message):
    var clone = $(".template .message").clone();
    // 3 step -- aggiungo una classe:
    clone.addClass("sent");
    // 4 step -- inserisco il testo:
    clone.find(".paragrafo").append(valore);
    // 5 step - inserimento dell'elemento nel DOM:
    $(".chat").append(clone);
    // 6 step - risposta automatica:
    setTimeout(autoReply,2000);
    // console.log('ciao');
}

function autoReply(){
    // 1 step - creo clone del template:
    var clone2 = $(".template .message").clone();
    // 2 step - aggiungo una classe:
    clone2.addClass("received");
    // 3 step - inserisco il testo:
    clone2.find(".paragrafo").append("Ciao!");
    // 4 step - inserimento dell'elemento nel DOM:
    $(".chat").append(clone2);
}
