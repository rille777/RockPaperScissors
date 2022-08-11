This is a simple Rock Paper and Scissors game

#Issue 1: 
My javascript was not working. This was due to I had added javascript ontop of my index.html file, which then would run before all my dom elements. textContent didnt update my value, due to getElementId was returning null value. This was also fixed by making sure the dom element existing before assigned a value. 
![Screenshot 2022-08-11 at 17 37 15](https://user-images.githubusercontent.com/70191337/184095403-3ecb60b7-d8db-42a6-87cc-4e57e2370617.png)
