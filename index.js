const links = [
  {
  label: "Week1 notes",
  url: "front_end_2_html/week_1.html",
  },
  {
  label: "Week2 notes",
  url: "front_end_2_html/week_2.html"
  }

  ]

document.getElementById("Links").innerHTML = links[0].label;
document.getElementById("Links").innerHTML += links[1].label;

  console.log("Links");