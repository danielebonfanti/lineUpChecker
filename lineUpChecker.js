function lineUpCheck() {
    var serieALineUp = document.getElementById("SerieALineUp").value;
    console.log(serieALineUp);
    var championsCupLineUp = document.getElementById("SerieALineUp").value;
    console.log(championsCupLineUp);
    if(serieALineUp && championsCupLineUp) {
        validateLineUpCopmlete();
    } else if (serieALineUp) {
        validateLineUpChampionship();
    } else {
        console.log("ERROR");
    }
}