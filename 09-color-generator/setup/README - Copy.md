//nota wandi

STATE SET UP

set color as empty string
set error as false
set list as empty array

set handleSubmit takes e
	set preventDefault()
	console.log to test

//STRUCTURE
insert fragment
	section .container
		h3;textContent color generator
		form; onSubmit set as handleSubmit
			input;type text,value is color (state)
				onChange takes e and set it color to value inputted*******
				placeholder #f15025
			button;type:submit .btn
	section .colors
		h4;textContent list goes here

//handleSubmit
//if data is in form of array, set state in form of array
//if data is in form of object, set state in form of object?

get new Values (library);input color;save as colors
	apply all method;input 10
	//every time handleSubmit,  will get color values and new Values(color).all(10) is set
	//bugs: when color is set to empty array
	//solution
	set try catch block on above
		catch; set error (state) to true


//SETTING DYNAMIC CLASS ON INPUT
className
	if error is true the className is 'error',otherwise set className to null
 
//SETTING LIST 
setList to colors set from before

.colors
	//iterates list (color,index)
	return singleColor Component
		//passing props
		key prop use index, spread color prop, define index prop as index
		console.log (color)
//SETTING singleColor component

destructure rgb,weight,index
//rgb and weight is from spreading color

//STATE SETTING ON singleColor component

set alert as false
setup  background color
	rgb will be turn to string to be assign to backgroundColor
	bcg=rgb.join(',')

return article 
	className is dynamic (use template string); default `color`
		check if index is more than 10 change from color to color-light
	set style; background color= rgb function. bcg as input
	insert p .percent-value; textContent is weight
	insert p .color-value;textContent hex
		use rgbToHex(...rgb)
		//option two
		//there is hex props in object (result from library function)
		//try to get hex from color props (result of library)-try to console log color
		//if u use function to generate hex, you will have # ready in front
		//if u use hex from library function, need to add #
	set optional p .alert
		shown when alert is true
	setOnclick in article
		set alert to be true
		use navigator.clipboard.writeText(hex)
SET USEEFFECT
//aim: set timeout for .alert
//each time alert change,timeout function will be set
//use setTimeOut(functionToRun,timeOutValue)
//setTimeout will return a timeout(use to clear timeout that has been set)
//set return as function to clearTimeout(timeout)

App.js

SET A DEFAULT STATE VALUE OF LIST AS new Values('#f15025').all(10)
	//note about all
	//all(10),basically generate 100/10 color variation
	//all(5),generate 100/5 color variation




 
	



 

