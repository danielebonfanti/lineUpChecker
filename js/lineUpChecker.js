var titolari;
var panchinari;
var cambi;

function lineUpCheck() {
    var serieALineUp = document.getElementById("SerieALineUp").value;
    var championsCupLineUp = document.getElementById("ChampionsCupLineUp").value;
    if(serieALineUp && championsCupLineUp) {
        if(validateLineUpComplete(serieALineUp, championsCupLineUp)) {
            failLabel.setAttribute("hidden", true);
            successLabel.removeAttribute("hidden");
        } else {
            successLabel.setAttribute("hidden", true);
            failLabel.removeAttribute("hidden"); 
        }
    } else if (serieALineUp) {
        if(validateLineUp(serieALineUp)) {
            failLabel.setAttribute("hidden", true);
            successLabel.removeAttribute("hidden");
        } else {
            successLabel.setAttribute("hidden", true);
            failLabel.removeAttribute("hidden"); 
        }
    } else {
        console.log("ERROR");
    }
}

function validateLineUpComplete(serieALineUp, championsCupLineUp) {
    console.log(championsCupLineUp);
    console.log(serieALineUp);
    if(validateLineUp(serieALineUp)) {
        var titolariSerieA = titolari;
        var panchinariSerieA = panchinari;
        if(validateLineUp(championsCupLineUp)) {
            var cambiSerieA = new Array();
            var cambiChampions = new Array();
            titolariSerieA.forEach(element => {
                if(element == element.toUpperCase()) {
                    cambiSerieA.push(element);
                }
            });
            titolari.forEach(element => {
                if(element == element.toUpperCase()) {
                    cambiChampions.push(element);
                }
            });
            if(cambiSerieA.length == 3 && cambiChampions.length == 3) {
                var isValidLineUp = true;
                var titolariUpperCase;
                var panchinariUpperCase;
                cambiSerieA.forEach(element => {
                    titolariUpperCase = titolari.map(element => element.toUpperCase());
                    panchinariUpperCase = panchinari.map(element => element.toUpperCase());
                    if(titolariUpperCase.includes(element) || panchinariUpperCase.includes(element)) {
                        isValidLineUp = false;
                    }
                });
                cambiChampions.forEach(element => {
                    titolariSerieAUpperCase = titolariSerieA.map(element => element.toUpperCase());
                    panchinariUpperCase = panchinariSerieA.map(element => element.toUpperCase());
                    if(titolariSerieAUpperCase.includes(element) || panchinariUpperCase.includes(element)) {
                        isValidLineUp = false;
                    }
                });
                return isValidLineUp;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }

    return true;
}

function validateLineUp(lineUp) {
    lineUp = lineUp.replace(/ +/g, "");
    lineUp = lineUp.replace(/(\r\n|\n|\r|,)/gm, "-");
    var array = lineUp.split("-");
    var filtered = array.filter((el) => {
        return el != "";
    });
    
    titolari = filtered.splice(0, filtered.indexOf("PANCHINA"));
    panchinari = filtered.splice(filtered.indexOf("PANCHINA") + 1);
    return titolari.length == 11 && panchinari.length <= 9;
}