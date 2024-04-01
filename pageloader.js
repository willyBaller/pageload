// Credit to https://webflow.com/@iljavaneck for functionality
// Code that runs on pageload
gsap.fromTo(".load_grid-item", 
{
	height: "170vh",
},
{
  height: "0vh",
  duration: 0.9001,
  stagger: { amount: 0.5, from: "random" },
  onComplete: () => {
    gsap.set(".load_grid", { display: "none" });
  }
});

// Code that runs on click of a link
$(document).ready(function () {
  $("a").on("click", function (e) {
    if (
    	$(this).prop("hostname") === window.location.host &&
      $(this).attr("href").indexOf("#") === -1 &&
      $(this).attr("target") !== "_blank") {
        e.preventDefault();
        let destination = $(this).attr("href");
        gsap.set(".load_grid", { display: "grid" });
        gsap.fromTo(
          ".load_grid-item",
          {
            height: "0vh"
          },
          {
            height: "170vh",
            duration: 0.9001,
            stagger: { amount: 0.5, from: "random" }, //you can also try a from: "start" or "end" -- get creative!
            onComplete: () => {
              window.location = destination;
            }
          }
        );
    }
  });
  
  // On click of the back button
  window.onpageshow = function(event){
  	if (event.persisted) {
    	window.location.reload();
    }
  }
});
