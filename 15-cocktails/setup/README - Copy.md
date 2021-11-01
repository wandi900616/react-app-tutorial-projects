#### React Router Fix

(Fix)[https://dev.to/dance2die/page-not-found-on-netlify-with-react-router-58mc]

#### CRA Fix

```

"build": "CI= react-scripts build",

```

App.js

return Router
	Navbar
	switch
		Route; exact path to '/';this is for Home
		Route; path to 'About'
		Route; path for 'SingleCocktail'--> path '/cocktail/:id'
		Route; * to 'Error'

Navbar.js

return nav .navbar
	div .nav-center
		Link to='/'
			img,src logo, alt,.logo
		ul; .nav-links
			li
				Link to / for home
			li
				Link to /about

About.js
return section .'section about-section'
	h1 textContent anything
	p; lorem 40

Error.js

section .error-page section
	.error-container
		h1; hello. error
		Link to /.btn btn-primary

Home.js

return main
	searchForm component
	cocktailList component

context.js

set the loading state as true for testing
set searchTerm state as 'a'
set cocktails as empty array

pass all the state and setSearchTerm in provider

SearchForm

get setSearchTerm from GlobalContext
** will use uncontrol input

CocktailList.js

get cocktails,loading from GlobalContext
if loading is true, return loading component (set up a conditional return)
if cocktails is empty array,return h2 .section-title

FETCHING DATA

context.js

set up a fetch function;async function
	set loading true first
	try and catch
		try: fetch the url: will be dynamic:connect search term to it
			return response; turn it into json()
			get the drinks prop from data above
			if drinks exist
				//will do somethin
			else;set drinks to empty
			set loading to false

		catch
			log error
			set loading false
		


fetch function will be invoke every time searchTerm change

try block iteration
	in if
	map drinks to return a new array of object
	object of interest is idDrink,strDrink,strDrinkThumb,strAlcohollic,strGlass

cocktailList.js

.section
	div .cocktails-center
		iterates cocktails
			pass it in Cocktail component as prop

cocktail.js

take the prop
return article .cocktail
	div .img-container
		img;alt;
	div .cocktail-footer
		h3;name
		h4;glass
		p;info
		Link to {`/cocktail/${id}`}//will be dynamic path
searchForm setup
get useRef from react (dot notation);set empty string
assign to searchValue

return 
section .section search
	form .search-form
		div .form-control
			label
				htmlFor;name
			input
				id is name
				set ref to searchValue
				onChange will be handle by searchCocktail

searchCocktail function
	get the value using the ref

setting focus

when page render,set focus() to the input

set onSubmit function on form
	e.preventDefault()

//SET UP SINGLE COCKTAIL COMPONENT
	//the data is being fetch once again

useParams to get the parameter sent in the link
set up loading state as false
set up a cocktail as null.... not as array?

when id in params change
	set the loading true
	create async function
		//try catch
		try to fetch url+id
			convert to json()
			if drinks exist
				get strDrink,strDrinkThumb,strAlcoholic,strCategory,strGlass,strInstructions
				strIngredient1...5, from first element in data.drinks array
				make create strIngredient array
				newCocktail object contain everything, and one array
				set the newCocktail

				
			else;set the cocktail to null
		catch;log error;set loading false
	dont forget to invoke that function

if loading is true, return loading component

if cocktail false?;return h2 .section-title; no cocktail

after all that passed, destructure all in that array from cocktail

return section .section cocktail-section
	Link to home; .btn btn-primary
	h2 .section-title; name
	div .drink
		img
		div . drink-info
			p
				span .drink-data;name
			copy for glass,instructions,info
			iterates ingredients
				only return not null
					<span> put item in span

useCallback hooks setup on context .js

