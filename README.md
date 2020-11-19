# Landing Page Project
we use frontend languages such as HTML to build structure of the project and CSS to add style and also JavaScript language to make it more dynamic
the project include 4 sections and dynamic navbar when you add section in html file automatically added to nav menu
when we click on any item of nav menu it scroll smoothly to its section in body 
the section and its linked item in navbar become highlighted when being in the viewport
#HTML file
first of all i link javaScript file to HTML file 
then i add another section to become 4 sections
#CSS file
i made some changes in css style sheet to make the navbar more responsive
and add style (color) to active class
#JavaScript file
start with declaring the variables
1- let sections : to select all sections
2- let fragment as a virtual variable
then start with build a dynamic navbar : a foreach loop to loop on sections
and use createElement method to create li item and anchor
appendChild method to append text to link ,link to li ,li to fragment finally outside the loop append fragment to Ul
scrollIntoView method to scroll smoothly to section needed on click with addEventListener method 
we made a function to give active class to the section in viewport depending on its position and we get the position by using
getBoundingClientRect method


