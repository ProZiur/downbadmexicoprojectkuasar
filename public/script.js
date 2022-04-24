const xhr = new XMLHttpRequest();
var responsexd
var nsfwxd = []

document.getElementById('retrive').onclick = function(e) {
    console.log("list retrived! click show to show")
    xhr.open('GET', '/getlist', true);
    xhr.send();
};
document.getElementById("show").onclick = function(e) {
    e.preventDefault();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                responsexd = JSON.parse(xhr.response)
                if (typeof(document.getElementById("divtable")) != 'undefined' && document.getElementById("divtable") != null) {
                    
                } else {
                    var divtable = document.createElement("div")
                    divtable.id = "divtable"
                    document.body.appendChild(divtable)
                }
                for (let i = 0; i < responsexd.length; i++) {
                    var value = responsexd[i]
                    if (typeof(document.getElementById("imgd"+i)) != 'undefined' && document.getElementById("imgd"+i) != null) {
                        document.getElementById("imgd"+i).setAttribute("src", responsexd[i])
                        document.getElementById("pd"+i).innerText = responsexd[i]
                        console.log("imgd"+i+" Exists so we overwriting the value!")
                    } else {
                        var imgd = document.createElement("img")
                        var pd = document.createElement("p")
                        var ad = document.createElement("a")
                        ad.id = "ad"+i
                        imgd.id = "imgd"+i
                        pd.id = "pd"+i
                        divtable.appendChild(ad)
                        divtable.appendChild(pd)
                        ad.appendChild(imgd)
                        ad.setAttribute("href", responsexd[i])
                        imgd.setAttribute("src", responsexd[i])
                        pd.innerText = responsexd[i]
                        imgd.height = 250
                        imgd.width = 250
                        imgd.style.display = "inline-block"
                        pd.style.display = "inline-block"
                        imgd.style.marginLeft = "-160px"
                        imgd.style.marginRight = "60px"
                        imgd.style.paddingBottom = "15px"
                        imgd.style.paddingLeft = "200px"
                        imgd.style.paddingTop = "20px"
                        pd.style.marginLeft = "-290px"
                        pd.style.fontFamily = "Segoe UI"
                        console.log("imgd"+i+" Does'nt exist so we creating a new one!")
                    }
                }
                document.getElementById("sr").innerText = "Total of "+responsexd.length+" Results";
                /*document.getElementById('sr').innerHTML = responsexd.response
                document.getElementById('im').setAttribute("src",responsexd.response)
                document.getElementById('im').setAttribute("width", "100")
                document.getElementById('im').setAttribute("height", "100")
                document.getElementById('im').style.display = "unset"*/
            }
        }
    }
    xhr.open('GET', '/sendtext', true);
    xhr.send();
}

document.getElementById("purge").onclick = function(e) {
    xhr.open('GET', '/purgelist', true)
    xhr.send();
}
document.getElementById("nsfw").onclick = function(e) {
    e.preventDefault();
    let waitingfor = document.createElement("h3")
    document.body.appendChild(waitingfor)
    waitingfor.innerText = "Searching..."
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                console.log(xhr.response)
                if (xhr.responseText == "1") {
                    waitingfor.innerText = "Found Click :D to show"
                }
            }
        }
    }
    xhr.open('GET', '/nsfw', true);
    xhr.send();
}
document.getElementById("nsfw2").onclick = function(e){
    e.preventDefault();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                nsfwxd = JSON.parse(xhr.response)
                if (typeof(document.getElementById("nsfwtable")) != 'undefined' && document.getElementById("nsfwtable") != null) {
                    console.log("AAX")
                    console.log(document.getElementById("nsfwtable"))
                } else {
                    var nsfwtable = document.createElement("div")
                    nsfwtable.id = "nsfwtable"
                    document.body.appendChild(nsfwtable)
                }
                for (let i = 0; i < nsfwxd.length; i++) {
                    var nsfw = nsfwxd[i]
                    if (typeof(document.getElementById("nsfwimg"+i)) != 'undefined' && document.getElementById("nsfwimg"+i) != null) {
                        document.getElementById("nsfwimg"+i).setAttribute("src", nsfwxd[i])
                        document.getElementById("nsfwp"+i).innerText = nsfwxd[i]
                        console.log("nsfwimg"+i+" Exists so we overwriting the value!")
                    } else {
                        var nsfwimg = document.createElement("img")
                        var nsfwp = document.createElement("p")
                        nsfwimg.id = "nsfwimg"+i
                        nsfwp.id = "nsfwp"+i
                        console.log(nsfwimg)
                        console.log(nsfwp)
                        nsfwtable.appendChild(nsfwimg)
                        nsfwtable.appendChild(nsfwp)
                        nsfwimg.setAttribute("src", nsfwxd[i])
                        nsfwp.innerText = nsfwxd[i]
                        nsfwimg.height = 250
                        nsfwimg.width = 250
                        nsfwimg.style.display = "inline-block"
                        nsfwp.style.display = "inline-block"
                        nsfwimg.style.marginLeft = "-160px"
                        nsfwimg.style.marginRight = "60px"
                        nsfwimg.style.paddingBottom = "15px"
                        nsfwimg.style.paddingLeft = "200px"
                        nsfwimg.style.paddingTop = "20px"
                        nsfwp.style.marginLeft = "-290px"
                        nsfwp.style.fontFamily = "Segoe UI"
                        console.log("nsfwimg"+i+" Does'nt exist so we creating a new one!")
                    }
                }
            }
        }
    }
    xhr.open('GET', '/nsfwsent',true)
    xhr.send();
}