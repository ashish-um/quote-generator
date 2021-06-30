Btn = document.getElementsByClassName('box btn')[0];
toastHolder = document.getElementsByClassName('toast-holder')[0];

color = ['#FF7600', '#FFC074', '#FF94CC', '#66DE93']

Btn.addEventListener('click', ()=>{
    toastMessage = document.createElement('div');
    toastMessage.className = 'box';
    randNum = Math.round(Math.random() * 3);
    switch(randNum){
        case 0:
            toastMessage.style.color = color[0];
            toastMessage.style.background = color[0];
            break;
        case 1:
            toastMessage.style.color = color[1];
            toastMessage.style.background = color[1];
            break;
        case 2:
            toastMessage.style.color = color[2];
            toastMessage.style.background = color[2];
            break;
        case 3:
            toastMessage.style.color = color[3];
            toastMessage.style.background = color[3];
            break;
    }

    $.getJSON('https://api.quotable.io/random?maxLength=80', function (data) {
        message = (`${data.content} —${data.author}`)
        toastMessage.innerText = message;
    });
    
    toastHolder.appendChild(toastMessage);
    deleteToast(toastMessage);

    
})

function deleteToast(toast){
    setTimeout(() => {toast.remove()}, 9000);
}

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText[1];
    
}