let navelements = ["About", "Features", "Pricing", "Testimonials", "Help"];

let navtext = '<ul class="flex">';

let links = ["about.html", "features.html", "pricing.html", "testimonials.html", "help.html"]

for(i=0; i<navelements.length; i++) {
     navtext += '<li><a href="'+ links[i] +'">' + navelements[i] + "</li></a>";
     console.log(navtext);
}

navtext += "</ul>";


document.getElementById("nav").innerHTML = navtext;

