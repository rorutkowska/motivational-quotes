$( document ).ready(function() {
    getQuote();
    $( '#modal-btn' ).click(function() {
        $('#modal').removeClass( 'is-active' )
    });
    $( '#modal-btn2' ).click(function() {
        $('#modal').removeClass( 'is-active' )
    });
});

function getQuote() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
        .done(show)
        .fail(handleError);
};

function show(response) {   
    $('#quote').text(response.quoteText);
    $('#author').text(response.quoteAuthor);
}

function handleError(response){
    $('#modal').addClass( 'is-active' );
}

