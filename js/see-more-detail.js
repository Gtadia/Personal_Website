var btn = document.querySelectorAll(".button-events");
var btnCount = btn.length;
for (var i = 0; i <= btnCount; i += 1) {
    console.log(btn);
  btn[i].onclick = function(e) {
    var num = (this.id);

        var events_dropdown = document.querySelectorAll(".see-more-description")[num];
        var Chevron = document.querySelectorAll(".see-more-chevron")[num];
        var see_more_see_less_text = document.querySelectorAll(".see-more-text")[num];

        events_dropdown.classList.toggle("expanded");
        Chevron.classList.toggle("rotate");

        const expanded = events_dropdown.classList.contains("expanded");
        if (expanded) {
                see_more_see_less_text.innerHTML = "See Less";
            } else {
                see_more_see_less_text.innerHTML = "See More";
            }
        }   
}