/**
 * Generic GUI functions
 */

function changeSlogan(){
    var slogan = random_sentence();
    changeSloganTo(slogan);

    showBookAd();
}

function showBookAd(){
    if(randomNumberUpTo(25)>23){
        document.getElementById("bookinfo").setAttribute("style","display");
    }
}
