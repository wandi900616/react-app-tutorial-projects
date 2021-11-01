Note

********************************************************************
useState

1. const[stateVariable,setStateFunction]=useState(InitialState)

stateVarible @ initialState can be any type of data, boolean//string//array//object

2. using setStateFunction

setStateFunction(newState)@
setStateFunction(functionThatReturnNewState)

3. input on form

setting stateVariable as value 
i.e <input value={stateVariable}/> WRONG FORM!!!
correction:<input value={stateVariable} onChange={(e)=>setStateFunction(e.target.value)}/>

**********************************************************************
useEffect

//function ExampleFunction will run only once when component render
//general form
// useEffect(()=>{
ExampleFunction()
return CleanUpFunction()
},[])
if ExampleFunction change something in component,use cleanUp function to undo the effect

if useEffect need to run everytime some state value change,insert stateVariable (which the useEffect depends on)

useEffect(()=>{
ExampleFunction()
return CleanUpFunction()
},[])
//run ExampleFunction() once,when component render

useEffect(()=>{
ExampleFunction()
return CleanUpFunction()
},[stateOne,stateTwo])
//run ExampleFunction() once, when component render and every time stateOne or stateTwo change


*********************************************************************

useRef

define a useRef

ElementRef=useRef(null)

<div ref={ElementRef}></div>

*********************************

template literal example

-must be use in js
-heavy use in string manipulation
-concatenate variable in ${}






render NavBar component in App

in NavBar.js (wrap in fragment)

return nav
		div .nav-center
			div .nav-header
			div .'links-container show container'
			ul .social-icons
.nav-header
	img; set src to logo as in ./logo.svg; alt can put any string; .logo
	button .nav-toggle
		insert <FaBars/>

.links-container...
	ul .links
		li
			a;href just set to #;textcontent 'home'
		repeat li for about,contact,product

.social-icons
	li
		a;put href to twitter https://www.twitter.com
	repeat li for facebook,youtube

=========================================================
//problem: hardcoding sidebar


Navbar.js
//delete all li
	iterate links
		link contain id,url,text
		please return li;key use id
			a with href use url;text content set to text

repeat process for li in .social-icons
	social contain element with prop id,url,icon
		return li
			a;href=url;text content

=======================================================

NavBar.js
//hiding showing link
//one approach
	set state: show link is false
	set onClick on .nav-toggle; TOGGLING
	//change happen instant

//approach to smooth transition
//css note
//if show link is true, add class show-container to .links-container
//bugs
//in index.css .show-container have hardcoded value of 10 rem
	//i.e. if all links combined is bigger than 10 rem,that particular link not displayed
	//check how many link, display it according to its height

NavBar.js

.links-container is set to default
//solution: useRef
set use ref for link-container//for div
//useRef is like you put flag on the element
//e.g. linksRef=useRef(null)
//<div ref={linksRef}>element targeted by useRef</div>
and for the links//set both to null

useEffect set up
//every time showLinks changes
//run check linkHeight
	const linksHeight
		set equal to links.current.getBoundingClientRect()
	if showLinks is true, 
		set linksContainerRef height equal `linksHeight`px
	else
		set linksCOntainerRef equal zero px
	//css note
		.links-container
		height:auto






 
	
