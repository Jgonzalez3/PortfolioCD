
var navBar = document.getElementById("NavBar");
var scrollChange = 0;
$(document).ready(function(){
    console.log(window);
    var startScroll = window.scrollY;
    var currentScroll = window.scrollY;
    var screenHeight = window.innerHeight;
    console.log(screenHeight);
    console.log(currentScroll);
    let videoBox = document.getElementById("videobox").getBoundingClientRect().top;
    console.log(videoBox);
    let Vid1 = document.getElementById("ActivityCenter");
    Vid1.pause();
    let Vid2 = document.getElementById("ECommerce");
    Vid2.pause();
    let Vid3 = document.getElementById("FunRooms");
    Vid3.pause();
    let Vid4 = document.getElementById("Wanderlust");
    Vid4.pause();
    

    $(window).scroll(function(s){
        console.log(s);
        console.log("Window",window);
        let currentHeight = s.originalEvent.path[1].scrollY;
        let screenTop = s.originalEvent.path[1].visualViewport.pageTop;
        scrollChange = currentHeight;
        console.log(currentHeight);
        console.log("SCreen TOP",screenTop);
        //Checks if video box has been entered by window. If window screen half way in starts all videos. If user leaves videos pause.
        if(currentHeight+(screenHeight/2) >= videoBox+startScroll){
            Vid1.play();
            Vid2.play();
            Vid3.play();
            Vid4.play();
        } else{
            Vid1.pause();
            Vid2.pause();
            Vid3.pause();
            Vid4.pause();
        }
        if(screenTop<= currentScroll){
            $("#NavBar").show();
            currentScroll = screenTop;
            return;
        }
        if(currentHeight >= screenHeight){
            $("#NavBar").hide();
            currentScroll = screenTop;
        }
    })
})

function FindContactMe(){
    window.scrollTo(0,0);
}
function FindProjects(){
    let projectsTitlePos = document.getElementById("ProjectsTitle").getBoundingClientRect();
    let ProjectsPosition = projectsTitlePos.top + scrollChange - projectsTitlePos.height;
    window.scrollTo(0, ProjectsPosition);
    console.log(projectsTitlePos);
    console.log(ProjectsPosition);
    // console.log(window.f);
}
