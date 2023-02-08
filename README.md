In this project the users is able to select a color and a color scheme mode. 
When clicked on the button a color scheme and the hex codes of the selected color displays.

For this to work I used the https://www.thecolorapi.com/docs#schemes API.

When the users selects a color the hex code and the mode are used in the fetch request as URL parameters.

The data that comes back is stored in an Array.

For this Array I created a for loop that creates a div for each color and uses the requested hex codes as background-colors 
and as text-content.

At first I quite struggled because even when I selected a color or a mode despite it I always got the default values back.
For this problem to solve I needed EventListeners which listens for every input on the input:type:color and the select element.

I saved the changes in an variable and used them as the url parameters-
Then thankfully the fetch request used not the default values of these elements but the changed ones.



https://robinho1997.github.io/color-scheme-generator/
