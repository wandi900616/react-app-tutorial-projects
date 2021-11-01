context.js

const [state,dispatch]=useReducer()

setup initialState as object
	loading is false
	cart is cartItems(data.js)
	total is 0
	amount is 0

reducer.js

set up reducer
	take state,action as input
		return state
export reducer

context.js

pass reducer,initialState in useReducer

send the state as defined by useReducer in provider

Navbar.js

get amount from useGlobalContext

in .total-amount;textContent{amount}

App.js

get loading from useGlobalContext

uncomment if block

cartContainer.js

get total from GlobalContext

****************************************

functionality setup

context.js

easiest first. clear items
objective: cart array to empty array

define a function to clearCart
	invoke dispatch;send object, type:CLEAR_CART
passed to the function in provider

cartContainer.js

use clearCart function in here

SETUP reducer function in reducer.js
if the action.type is CLEAR_CART
	return-> spread the initial state, then add new prop
		//example: state={prop1:1,prop2:2,prop3:3}
		//return {...state,prop2:4}
		//result--> state={prop1:1,prop2:4,prop3:3}
		set cart prop to empty array
**************
REMOVE ITEM FROM CART

setup a function
	dispatch type:REMOVE,payload:id
passed in reducer

cartItem.js

get remove function
	assigne remove(id) in remove button

reducer setup

if action.type is REMOVE
	spread initial state first
	change cart value@array
		get the initial cart using state.cart
		return the state.cart but without the id that being sent(hint:filter)
**************
INCREASE AMOUNT

context.js

set up function
	dispatch DECREASE AND INCREASE

COMPONENT
cartItem.js
	import function before;put onClick

reducer.js

INCREASE ACTION TYPE(NESTING STATE MANIPULATION EXAMPLE!!!!!!!)
STATE MANIPULATION
	return copy of the initial state (spread all props)
	change the cart property (one of prop in previous state)
		almost same as set state, but setting in reducer means the functionality can be accessed globally
CHANGING CART ARRAY
	for every item in cart check for the item id
		//it matches payload (id sent through action object)
		item is object containing various parameter
		return a copy of every paramater, but change the amount prop in the item to previous amount prop value to +1
	it doesnt match, just return the item back

COPY FOR DECREASE
***special notes; we dont want amount to be negative
	so, if negative we just want to remove the item from array
	so, if item.amount is negative, remove it from cart array
	only take the amount where it is positive


****************

STATE.AMOUNT HANDLING

REDUCE METHOD for array
	array.reduce(callbackFunction,defaultStart)
	callbackFunction takes parameter (accumulated,currentValue)
	defaultStart will be return

in each iteration of the array

context.js

every time cart array changes
i want to run a dispatch with type GET_TOTALS

reducer.js

GET_TOTALS

reduce the cart array
	define an initial amount:0,total:0
	for every item in array, accumulate the current value of amount, to acccumulated amount
	use toFixed fixing number of decimals

//DATA FETCHING

set up function;as async
	dispatch a type of loading
	fetch the url
		will return a response
			turn it into a json();also await
dispatch a type of display_items
	passed the response as json to payload

when dom render, we will run that function

reducer

if LOADING, loading is true

if DISPLAY ITEMS, the cart is set to json being sent thru payload,set loading to false
	




