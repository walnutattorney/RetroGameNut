if($) {
    $(document).ready(function() {
        getAuth();
    });
}

function getAuth() {

    $.ajax({
        url: "https://id.twitch.tv/oauth2/token",
        method: "GET",
        data: {
            client_id: "a3torlt2pt7kusb8xnvql9d3c2m1fu",
            client_secret: "1faa624kcyer190d1fs9yl45dl8wzd",
            grant_type: "client_credentials"
        },
        dataType: 'json',
        context: document.body,
        success: function(data) {
            console.log(data);
        }
    });

}