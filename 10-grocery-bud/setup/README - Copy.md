//nota wandi


//App.js

STATE
setName as empty string
set list as empty array
set editing as false
set editId as null//current item id being edited
set alert as {show:false,msg:'',type:''}//multiple state set up





handleSubmit setup
	e.preventDefault
	console.log('hello')//as test

	if the name is empty if(!name)
		//set some alert
	else if (name is true and isEditing true)
		//deal with edit
	else 
		//show alert. item added
		const newItem is object
			id: newDate().getTime(.toString(),
		title:name};
		set list=> spread the list array and add new item
		set Name equal empty (empty the input)

jsx return

section .section-center
	insert form .'grocery-form
		onSubmit set to handleSubmit
		CONDITIONAL RENDERING: if alert.show is true show component <Alert/>
		h3;textContent:grocery buds
		div .form-control
			input;type text
				.grocery
				placeholder='e.g eggs'
				value set to {name}
				onChange: takes e and then setName as e.target.value

			button .submit-btn type submit;
				text content:conditional rendering:if isEditing is true,button text is 'edit', else it is 'submit'
	div .grocery-container
		<List/>
			pass property items define as list (from state)
			//this is conditionally rendered. if list.length is more than one you show it
		insert btn .'clear-btn';textContent clear items


LIST.JS SETUP

destructure items

return
	div .grocery-list
		iterate items in here
			destructure id and title from props
			return article
				key={id}
				insert p .title;textContent {title}
				insert div .btn-container
					button;type=button;className='edit-btn' @'delete-btn'
						insert <FaEdit/> repeat for FaTrash 


------------------------------------------------------
App.js

in .grocery-form
	conditonal render <Alert/>
		only shown when alert.show is true
		pass property of alert in <Alert/>
			//in Alert.js
			destructure type,msg
			//show not needed in here
			//show only needed in App.js
			return p;className is conditionally rendered
				either `alert alert-success` or `alert alert-danger`(use template string to evaluate {type})
				textContent is set to {msg}
SETTING ALERT

if (!name)
	setAlert(alertObject)
		alertObject.show=true
		alertObject.type='danger'
		alertObject.msg='please enter value'
			//set a new function to simplify 
			//showAlert
			takes,show=false,type="",msg=""
			//when this is called
			//setAlert is invoke in this function
			//setAlert show:show,type:type,msg:msg//or es6
			pass showAlert function as props in <Alert/>

Alert.js

useEffect set up
//when component render
//setTimeout will be carry out
//when u pass an empty value in showAlert, it will reset the value in alert to default as defined
//setTimeout method will invoke removeAlert after 3 seconds (removeAlert is actually prop containing showAlert)
//the return of setTimeout can be used in function clearTimeout 
//pass showAlert in alert component


App.js

SETTING CLEAR LIST FUNCTION
//show alert,true,danger,
//setList to empty array
//assign to clear items button


SETTING REMOVE ITEM
//show alert
//set the into a new list
	//filter new list so that its element.id not equal to id passed to remove item function
//pass this function to List.js
	//assign it to delete button

//bugs when added and delete item 3000ms delay dont work properly
	//useEffectSetTimeout to depend on change of list
	//Alert.js
	//pass list from app.js



//editItem function
	//aim: for choosen id place name
	//iterate list using find on the list
	//then set ID to id result
	//set the state name to 
	//title result will be set to state name input
	pass function to List.js
	//assign to onClick edit button

setting name&&isEditing on handleSubmit

use set List
//the new list is old list but map to a new list
//it checks every element id
// in new list check for its id, where it matches current id (set in edit item function)
	//return all item except title(title is set to name(state))
after all that
	set Name to empty string, is editing to false,id to null
	show alert

SET LOCAL STORAGE

using useEffect
//every time list change
	localStorage.setItem('list',JSON.stringify(list))
	//bugs: refresh will delete all items

define a getLocalStorage function
	let list=localStorage.getItem('list')
	if(list){
return JSON.parse(localStorage.getItem('list'))
} else //return empty array

set this outside App function





