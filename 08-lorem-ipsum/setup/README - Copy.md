nota wandi

LOREM IPSUM

set state
count as zero
text as empty array


STRUCTURE
insert section .section-center

	in .section-center
	insert h3 in
	insert form .lorem-form
		set onSubmit as function handleSubmit
		define handleSubmit takes e params
			set preventDefault, can use console.log to test
		insert label in form htmlFor=amount
			textContent paragpraphs
		insert input 
			type as number, name as amount, id as amount, value as count(state), 
			set onChange
				the onchange will parameter e and set count(state) to be the e.target.value. i.e. value in input
		insert button
			type as submit
			.btn
			textContent=generate
	insert article .lorem-text
		iteration of p will happen in here

FUNCTIONALITY

//when form is submitted
handleSubmit called
	text(state) is set to data
text(state) will be iterated in .lorem-text
	variable as text and index
	return p
handleSubmit
	check for count value(will be string, use parseInt)
	count value will be set to be params in slice method of data
//bugs: negative value, or value more than length of data will display all data
//correction
	if count is 0 or less, the count value will be set to 1
	if count is more than 8, the count value will be set to 8


