#Madlibs Poem


Started the Poems App by using a boilerplate by installing Vue with Vue CLI. 
Used vue create command to get this started. Downloaded the basic dependencies when prompted
Also used bootstrap which was imported in the main.js file to add a basic styling

The program starts on the localhost:8080/create page where the user adds their 3
nouns, 3 adjs, 3 advs, 3 prepostions, and 3 verbs. When they click 'Add Item' their 
poem is created! To view the poem go to 'All Items'


To install the proper packages and scripts one will need to run the following commands:
   
    1. npm install -g @vue/cli
    2. npm install vue-router axios vue-axios --save
    3. npm install bootstrap --save
    4. npm install nprogress --save
    5. npm install --save express body-parser cors mongoose
    6. npm install nodemon --save-dev

    ** NOTE **
    To run the mongoDB, I had to download HomeBrew first, then was able to download 
    mongoDB using a brew command.



To run the program I had 3 terminal tabs open at the root of the project:
    
    1. On the first tab run the command 'mongod' to run the database
    2. On the second tab run the command 'npm run serve'
    3. On the third tab run the command 'nodemon server'
