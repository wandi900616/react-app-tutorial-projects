App.js

insert Home,Modal,Sidebar component

Home.js

insert main
	button .sidebar-toggle;insert FaBars
	button .btn;textContent:showModal

Modal.js
div .modal-overlay show-modal(wrap in template literal)
	div .modal-container
		h3;textContent:modal content
		button .close-modal-btn;insert Fatimes

Sidebar.js

insert aside .sidebar show-sidebar
	div .sidebar-header
		img .logo;src is logo
		button .close-btn
	ul .links
		iterate links (contain id,url,text,icon)
			li(put key)
				a href is url;content is icon and text
	ul .social-icons
		iterate social (contain id,url,icon)
			li
				a;href is url;textContent is icon

setting use context (avoid prop drilling)

context.js

const AppContext=React.createContext()
const AppProvider=({children})=>{

return <AppContext.Provider> component; 
	put value prop;
	put children as content in component
}

export {AppContext,AppProvider}

index.js

import AppProvider from context

wrap app in AppProvider component

Home.js

import AppContext from ./context
import useContext from react

const data=useContext(AppContext)
try console log data

//other way to get data is using custom hook
	//create a useGlobalContext custom hook that return above
	//set in context.js

context.js

SETTING AppProvider

set isSidebarOpen as false
set isModalOpen as false

define a function openSidebar:setSidebarOpen as false
	another opposite function
define for Modal too

pass all four functions as value;es 6 prop:prop become prop
pass two state value also


Home.js

destructure openSidebar,openModal
set onClick event for openSidebar and openModal

Modal.js

destructure isModalOpen,closeModal from useGlobalContext
set dynamic className
	if isModelOpen is true modal-overlay show-modal else modal-overlay
set onClick closeModal

sidebar.js

destructue isSidebarOpen,closeSiderbar

dyanamic className
	default sidebar; add 'show-sidebar'
