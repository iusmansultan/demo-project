
document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(CSSPlugin);
    


    // Call the scrollToBottom() function to scroll to the bottom of the page
    /*let contactTrigger =  document.querySelector(".nav-contact a");
    // console.log(contactTrigger);
    contactTrigger.addEventListener('click', function() {
        const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
            document.documentElement.clientHeight, document.documentElement.scrollHeight, 
            document.documentElement.offsetHeight);

        // Animate the scrolling of the page to the bottom using the `scrollTo` target
        gsap.to(window, {duration: 1, scrollTo: {y: height}, ease: "power4.out"});

    });*/

    let expandableMenu =  document.querySelector("li.expandable");
    console.log(expandableMenu);
    expandableMenu.addEventListener('touchstart', function(){
        console.log("triggered");
        // gsap.to(".top-nav-menu > a", { duration: 0, opacity: 0});
        let elements = document.querySelectorAll(".top-nav-menu > a");
        for(let i=0; i<elements.length; i++){
            console.log(elements[i]);
            elements[i].style.display = "none";
        }
        document.querySelector(".submenu").style.display = "block";
    });

    let submenuClose =  document.querySelector(".submenu a.close");
    console.log(submenuClose);
    submenuClose.addEventListener('touchend', function(){
        console.log("triggered");
        // gsap.to(".top-nav-menu > a", { duration: 0, opacity: 1});
        document.querySelector(".submenu").style.display = "none";
        /*let elements = document.querySelectorAll(".top-nav-menu > a");
        for(let i=0; i<elements.length; i++){
            console.log(elements[i]);
            elements[i].style.display = "block";
        }*/
        gsap.to(".top-nav-menu > a", {delay: 0.1, css: {display: "block"}});

        
    });




    // play video component only if present
    const video1 = document.getElementById('intro-video-seq1');
    if(video1){
        // Set the initial state of the content to be hidden
        gsap.set(".video-overlay-content", { opacity: 0 });
        // Create a timeline to control the animation
        var tl = gsap.timeline();

        

        function playbackObserver(){
            console.log(video1.currentTime);
            if(video1.currentTime >= 8.5){             // play Timeline animation as video reaches 8th timeframe
                console.log('INSIDE IF');
                tl.to(".video-overlay-content", { duration: 2, opacity: 1})
                    .to(".arrow-down", { duration: 0.5, opacity: 1, y: 10, delay: 1 })
                    .to(".arrow-down", { duration: 2, y: -5 });
                    
                tl.play();
            }
            // if(video1.currentTime >= 10.5){
                
            // }
        }
        video1.addEventListener("timeupdate", playbackObserver)
    }
    

    
            
});
