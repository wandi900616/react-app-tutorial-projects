in app.js

add NavBar,SideBar,Hero,Submenu component as return

context.js

set up global context

const AppContext=React.createContext();

	set up AppProvider function;destructure children; 
	children will be props in AppContext.Provider component
	set up state isSidebaropen,isSubmenuOpen as true(testing purposes)
	opensidebar function will run set sidebar as true
	set up for submenu too
	send all states and function as context (set up as value prop)

setup a custom useGlobalContext that return useContext(AppContext)

index.js

import AppProvider from .context
wrap App in AppProvider so u have access in all component

Hero.js

use globalContext (as data)

Navbar.js
get openSidebar openSubmenu,closeSubmenu from globalContext

//return
nav .nav
	div ,'nav-center
		div .nav-header
			img; src set as logo;.nav-logo
			buttton;.btn toggle-btn;when click will call openSidebar
				insert Fabars component
		ul . nav-links
			li
				button .link-btn;textContent products
			*repeat for developers and company(match data.js)
		button.btn sigin-btn;textContent Sign in

Hero.js

use closeSubmenu from useGlobalContext
return
section .hero
	div .hero-center
		article .hero-info
			h1
			p
			button .btn;textContent start now
		article .hero-images
			img;src=phoneImg .phone-img

Sidebar.js
//will iterate sublinks
get isSidebarOpen,closeSidebar from globalContext

return aside;textContent sidebar componen
	className is dynamic; if sidebar open,sidebar-wrapper show,else sidebar-wrapper only
	div .sidebar
		button .close-btn;when click closeSidebar is invoke;textContent is <Fatimes/>
		div .sidebar-links
		//double iteration
			iterate sublinks;each element containing links and page
				return article(just use index as key)
					h4;{page}
					div .sidebar-sublinks
						//iterate links;
						each element contain url,icon,label
							return a;key(index);href is url
								insert icon label in a

Submenu.js

get issubmenuopen from useGlobalecontext

return aside;dynamic classname; submenu show if isSubmenuopen true


Navbar.js

create a displaySubmenu event function
	
	invoke openSubmenu

onMouseOver will invoke displaySubmenu

//css note
will change position(not absolute)


displaySubmenu setup

get the e.target.textContent
	get rect=e.target.getBoundingClientRect();
	get center by getting rect.left and rect.right and divide by 2
	get bottom by getting rect.bottom-3
	passed center and bottom as object (coordinates), and page as input in openSubmenu statefunction
	openSubmenu(page,coordinates)

modify context.js

openSubmenu
will get text,coordinate

set location as {}

passed location as value in AppProvider

Submenu.js

get location from globalContext

set use effect
	get container=useRef()
	get the container.current
	get center,bottom prop  from location
	set the container.current.style.left to be center+px
	set cotainer.current.style.top bottom+px

get ref to <aside>//quick note ref={container}

//setting submenu page
//will get from sublinks=array containing objects, object contain page and links where links is another array

context.js

set page as {page:'',links:[]}

openSubmenu
	use find
	find element in sublinks
		where element.page is equal to text passed in openSubmenu
			set the page equal to result of find
passed page state value in value


Submenu.js

destructure page from globalContext
	destructure page,links from page

iterate inside <aside>
	<h4>;textContent is page
	div dynamic class `submenu-center col-2` 2 is dynamic depend on array
		iterate links;contain link
			link is object contain label,icon,url
			return a;key use index;href is url
				put icon,label in a

local stateValue in submenu
set columns as 'col-2' in state
change className

useEffect setup
setColumns to col-2

at the end, if links is 3, set Columns to col-3
if more set columns to col-4

add dependency to links change to carry out useEffect

//hiding submenu

Hero.js

set up on .hero, if mouse over, invoke closeSubmenu

Navbar.js

define handleSubmenu (invoke closeSubmenu)
	if e.target.classList.contains('link-button') is false then we invoke closeSubmenu



		










			
