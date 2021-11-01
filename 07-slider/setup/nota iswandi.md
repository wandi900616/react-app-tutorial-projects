Pseudocode

State Setting

set people state value as data
set index state value as 0

JSX return

section with .section
in .section insert div .title
in .title insert h2
in h2 insert span and text content 'reviews'
//.title is advised to be in separated files

insert another div .section-center in .section

in .section-center
iterate people: 
1) people is array of person object
2) person object contain id,image,name,title,quote

the return of each iteration
article as container (container always must have unique key id)

insert img .person-img. set src and alt properties
insert h4 to place name
insert p .title to place title
insert p .text to place quote
insert FaquoteRight component .icon

outside iteration (in .section-center)

insert button .prev
place icon FoChevronLeft in .prev

repeat for Right

SETTING CLASSES

.section center is set to flex
all its children (article iterations) will be in one row
**height must be set**

article have position absolute in center

article have no class at the moment

three classes will be defined for each article iterations

.nextSlide { 
article will be placed on right transform:translateX}
.activeSlide {
article will be placed in center;
article opacity by default 0 -> 1
} 
.prevSlide { article placed in left} 

DYNAMIC CLASSES FOR ARTICLE RETURN

article .{position} position can be .nextSlide,.activeSlide,.lastSlide

Logic setup:

personIndex is iterations index

default let position='nextSlide'//all the class by default is nextSlide
if index (state) is same as personIndex,
the article className will be activeSlide
if personIndex is -1 from index (state) or 
(index (state) equal 0 and personIndex equal to lastIndex in people)//special consideration when index 0 and the personIndex is the last one in people,the iteration will set position={prevSlide},
return className prevSlide

LEFT AND RIGHT BUTTON SET UP

right button
add onClick=> increase index (state) by 1

left button

add onClick=> decrease index (state) by 1

//bugs note 
//when index (state) = 0. left button click will cause index become -1
//when index (state) = lastIndex (people.length-1). right button click will cause index to become greater than available index

//bug fix
//useEffect

define a useEffect have dependencies on index, people (both from state)
i.e. the function only run when index change or people change

useEffect (functionToRun,dependencies)

functionToRun:
const lastIndex=people.length-1

if index (state) is negative-> set index back to lastIndex
if index (state) more than lastIndex -> set index back to 0

//useEffect second set up

useEffect (functionToRun,dependency(s))//for autoslider

the useEffect will be invoke when index change
functionToRun:setInterval (custom javaScript function)
setInterval(programme to be executed,interval)

example: setInterval(setIndex(index+1),3000)

after 3000 ms, index will be increase by 1

//bugs//setInterval add interval of setIndex in page//
//set up clean up function

functionToRun have return cleanUpFunction
cleanUpFunction usually set to undo FunctionToRun




