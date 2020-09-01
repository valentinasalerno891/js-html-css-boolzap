// Milestone 2
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e, cliccando invia (l'icona o anche con enter), il testo viene aggiunto al thread sopra, come messaggio verde.
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// Suggerimento: Utilizzate il template come vi ho fatto vedere a lezione, ma soprattutto state attenti a trovare l'elemento giusto dove inserire (appendere) i valori ricavati dal campo input.
// In poche parole se il mio template prevede un tag p (possibilmente con una determinata classe) dove inserire del testo, devo trovarlo e poi aggiungere il testo!
// Ricordatevi anche che alla fine il clone va pushato (incollato) dove desiderate.

$(document).ready(function(){

    $('.icon-send').click(function(){
        invioMessaggio();
    });

    $("#testoMioMessaggio").keydown(function(){
        if (event.which == 13 || event.keyCode == 13) {
            invioMessaggio();
        }
    });


// Milestone 3
// a) Ricerca utenti: scrivendo qualcosa nell'input a sinistra, vengono visualizzati solo i
// contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
// “mar” rimangono solo Marco e Martina)

    // $('.search-bar input').keyup(function(){
    //     var testo = $('.search-bar input').val().toLowerCase();
    //     // console.log(testo);
    //
    //     $('.nome-contatto').each(function(){
    //         var nomeContatto = $(this).find('.contact-name').text();
    //         nomeContatto = nomeContatto..toLowerCase();
    //         if(nomeContatto.includes(testo){
    //             $(this).show();
    //         }) else {
    //             $(this).hide();
    //         };
    //     });
    // });

// b) Click sul contatto: mostra la conversazione del contatto cliccato, è possibile inserire
// nuovi messaggi per ogni conversazione.

    $(document).on('click', '.contact-name', function(){
        //trovo posizione contatto
        var posizione = $(this).index();
        //tolgo classe active al contatto cliccato
        $('.contact-name').removeClass('active');
        //aggiungo classe active al contatto cliccato
        $(this).addClass('active');
        //tolgo classe active alla chat corrisp.
        $('.chat').removeClass('active');
        //visualizzo chat corrisp. al contatto selezionato
        $('.chat').eq(posizione).addClass('active');
        //ricavo nome contatto selezionato
        var nome = $(this).find('.contact-name').text();
        //lo inserisco nell'intestazione in alto
        $('.info-ultimo-accesso .contact-name-active h2').text(nome);
        //

    });
});


// ***FUNZIONI***

function invioMessaggio(){
    // 1 step -- prendo il valore di input:
    var valore = $("#testoMioMessaggio").val();
    $("#testoMioMessaggio").val('');
    // 2 step -- creo clone del template (parto da .message):
    var nuovoMessaggio = $(".template .message").clone();
    // 3 step -- aggiungo una classe:
    nuovoMessaggio.addClass("sent");
    // 4 step -- inserisco il testo:
    nuovoMessaggio.find(".paragrafo").append(valore);
    // (aggiunta dell'orario):
    var orario = data();
    nuovoMessaggio.find('.ora-messaggio').append(orario);
    // 5 step - inserimento dell'elemento nel DOM:
    $(".chat").append(nuovoMessaggio);
    // 6 step - risposta automatica:
    setTimeout(autoReply,2000);
    // console.log('ciao');
    nuovoMessaggio.find(".paragrafo").append('');
}

function autoReply(){
    // 1 step - creo clone del template:
    var clone2 = $(".template .message").clone();
    // 2 step - aggiungo una classe:
    clone2.addClass("received");
    // 3 step - inserisco il testo:
    clone2.find(".paragrafo").append("Ciao!");
    // (aggiunta dell'orario):
    var orario = data();
    clone2.find('.ora-messaggio').append(orario);
    // 4 step - inserimento dell'elemento nel DOM:
    $(".chat").append(clone2);
}

function data() {
  var d = new Date();
  // var x = document.getElementById("orario");
  var ora = addZero(d.getHours());
  var minuti = addZero(d.getMinutes());
  return ora + ':' + minuti;
  // x.innerHTML = h + ":" + m;
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
