var titolari;
var panchinari;

function lineUpCheck() {
    var serieALineUp = document.getElementById("SerieALineUp").value;
    var championsCupLineUp = document.getElementById("ChampionsCupLineUp").value;
    if(serieALineUp && championsCupLineUp) {
        validateLineUpComplete(serieALineUp, championsCupLineUp);
    } else if (serieALineUp) {
        validateLineUpChampionship(serieALineUp);
    } else {
        console.log("ERROR");
    }
}

function validateLineUpComplete(serieALineUp, championsCupLineUp) {
    console.log(championsCupLineUp);
    console.log(serieALineUp);
    if(validateLineUpChampionship(serieALineUp)) {
        
    }
}

function validateLineUpChampionship(serieALineUp) {
    serieALineUp = serieALineUp.replace(/ +/g, "");
    serieALineUp = serieALineUp.replace(/(\r\n|\n|\r|,)/gm, "-");
    var array = serieALineUp.split("-");
    var filtered = array.filter((el) => {
        return el != "";
    });
    
    titolari = filtered.splice(0, filtered.indexOf("PANCHINA"));
    panchinari = filtered.splice(filtered.indexOf("PANCHINA") + 1);
    return titolari.length == 11 && panchinari.length <= 9;
}