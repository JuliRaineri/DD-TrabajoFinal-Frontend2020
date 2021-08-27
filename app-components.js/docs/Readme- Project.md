

****** Pokemon Finder *******

Has been buily with HTML , CSS and JS.

the Web app shows three stages
1- Loading Stage
2- Search Stage
3- Pokemon Factsheet

Stage 1
loader-animation.js :
Circle loader developed with setInterval method to repeat the loading animation each time the page is loaded. 

the setTimeout is conected to next stage 2 after 3 secs.

Stage 2
poke-api-processor.js :
To obtain data and therefore to process it throught the component I used Async/await method for the fetch. 
Connected with API.

script.js :
Used localStorage method getItem to virtualy catch the user requested info from (form- input number or name).

search.js :
With the event handleSearch I used the preventDefault method to  cancel the event if it is cancellable, without stopping the rest of the event's operation, that is, it can be called again.

So once the search button is pressed the api will get the filtered info through the pokeName argument. 

 added the setItem method to call by the input user request to filter by Id(number) or name of the pokemon.
the localStorage will keep that info until refresh of the page.
then once user click on search button will retrieve, filter and link all the info to be displayed on Stage 3



Stage 3
script.js :
with the poke id and poke name filtered,
 this stage shows all the info gathred from the API and posted on the factsheet.

Stage 4

loader-animation.js :
Return from Stage 3 to Stage 2 for the user to make a new search.
poke-api-procesor.js :
Button added to back on search page.
