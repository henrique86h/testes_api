fetch("https://api.jikan.moe/v4/anime?q=naruto")
    .then((result) => result.json())
    .then((data) => {
        dados = data.data
        dados.forEach(e => {
            let card = "<div class='card'>"
            
            card += "<img src='" + e.images.jpg.image_url + "'>"
            card += "<h2>" + e.title + "</h2>"
            
            if(e.title_japanese != null){
                card += "<h3>" + e.title_japanese + "<h3>"
            }
            if(e.year != null){
            card += "<h4>" + e.year + "</h4>"
            }
            if(e.synopsis != null){
            card += "<p>" + e.synopsis + "</p>"
            }
            card += "<a href='" + e.url + "'>Saiba mais</a>"
            
            card += "</div>"
            document.querySelector(".lista-animes").innerHTML += card
        });
    })