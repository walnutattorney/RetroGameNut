if($) {

    const clientId = "a3torlt2pt7kusb8xnvql9d3c2m1fu";

    $(document).ready(function() {
        getAuth(clientId);
    });
}

function getAuth(clientId) {

    $.ajax({
        url: "https://id.twitch.tv/oauth2/token",
        method: "POST",
        data: {
            client_id: clientId,
            client_secret: "1faa624kcyer190d1fs9yl45dl8wzd",
            grant_type: "client_credentials"
        },
        dataType: 'json',
        context: document.body,
        success: function(data) {
            getGame(data.access_token, clientId);
        }
    });

}

function getGame(accessToken, clientId) {

    $.ajax({
        url: "https://api.igdb.com/v4/games/",
        method: "POST",
        headers: {
            'Authorization': 'Bearer ' + accessToken,
            'Client-ID': clientId
        },
        contentType: 'text/plain; charset=utf-8',
        processData: false,
        data: "fields *; where id = 1074;",
        success: function(data) {
            console.log(data);
        }
    });

}