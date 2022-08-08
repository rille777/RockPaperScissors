This is a simple Rock Paper and Scissors game

#Issue 1: 
My javascript was not working. This was due to I had added javascript ontop of my index.html file, which then would run before all my dom elements. textContent didnt update my value, due to getElementId was returning null value. This was also fixed by making sure the dom element existing before assigned a value. 
