const Audios = document.querySelectorAll("audio");
const AllCards = document.querySelectorAll(".flip-card");
const loading = document.querySelector(".loader");
let CurrentlyPlaying;
const PruplMan = document.getElementById("pruplman");
const Clickable = document.getElementById("clickable-icon");
const defining = document.querySelector(".defining-right-click");
let ClickCount = 0;

AllCards.forEach((x) => {
    if (x.getAttribute("redirectto"))
    {
        x.setAttribute("ClickedAmount", "0");
        x.addEventListener("click", function(e)
        {
            e.preventDefault();
            e.stopPropagation();
            const NewCount = Number(x.getAttribute("ClickedAmount")) + 1;
            x.setAttribute("ClickedAmount", NewCount.toString());
            if (NewCount === 10) window.location.href = x.getAttribute("redirectto");
        })
    }
});

Clickable.addEventListener("click", function()
{
    ClickCount = ClickCount + 1;
    if (ClickCount === 10)
        PruplMan.style.display = "block";
    else if (ClickCount === 20)
        PruplMan.style.filter = "invert(100%)";
    else if (ClickCount === 30)
        PruplMan.style.filter = "grayscale(100%)"
    else if (ClickCount === 100)
        PruplMan.style.animation = "spin 1s infinite linear";
})

Audios.forEach((audio) => {
    
    audio.onwaiting = ()=> {
        loading.style = "display: block";
    }

    audio.oncanplay = () => {
        loading.style = "display: none";
    };
    
    audio.setAttribute("FirstCheck", "true");
    audio.parentElement.addEventListener("click", function(event)
    {
        event.stopPropagation();
        if (audio.getAttribute("FirstCheck") === "true")
        {
            audio.setAttribute("FirstCheck", "false");
            if (CurrentlyPlaying)
            {
                CurrentlyPlaying.pause();
                CurrentlyPlaying.currentTime = 0;
            }
            CurrentlyPlaying = audio;
            audio.play();
            return;
        }
        if (audio.paused)
        {
            if (CurrentlyPlaying)
            {
                CurrentlyPlaying.pause();
                CurrentlyPlaying.currentTime = 0;
            }
            audio.play();
            CurrentlyPlaying = audio;
        }
        else
        {
            audio.pause();
            audio.currentTime = 0;
        }
    })
})

definingAudio = new Audio("https://cdn.discordapp.com/attachments/478710422833463297/978594352400048158/123123123123_1.wav");

defining.addEventListener("contextmenu", function(event)
{
    console.log("e");
    event.preventDefault();
    event.stopPropagation();
    definingAudio.setAttribute("FirstCheck", "true");
    if (definingAudio.getAttribute("FirstCheck") === "true")
    {
        definingAudio.setAttribute("FirstCheck", "false");
        if (CurrentlyPlaying)
        {
            CurrentlyPlaying.pause();
            CurrentlyPlaying.currentTime = 0;
        }
        CurrentlyPlaying = definingAudio;
        definingAudio.play();
        return;
    }
    if (definingAudio.paused)
    {
        if (CurrentlyPlaying)
        {
            CurrentlyPlaying.pause();
            CurrentlyPlaying.currentTime = 0;
        }
        definingAudio.play();
        CurrentlyPlaying = definingAudio;
    }
    else
    {
        definingAudio.pause();
        definingAudio.currentTime = 0;
    }
})