## Week 14 Quiz - Debugging, Git, & GitHub

You have just joined your favorite company and have been tasked with printing new data to a webpage. However, the existing files/directories are all jumbled up, and the code seems to have errors. Fix the bugs and sile structure. 

1. Debug the broken code so that it's working
2. Correct the file architecture using command line
3. node_modules are committed, remove them from repo on GitHub
4. Correct the server file’s directory by moving it to the appropriate directory
5. Update README with
    - screenshot of the app's webpage, 
    - document errors you encountered and how you fixed them, 
        - updated presentation of code in server.js
            - moved app.listen to the bottom
            - moved get request to the top
            - improves ability to quickly find what endpoint is being used to access the data
        - updated code in app.js
            - fixed typo for item to items
            - allow data to pass through function
    - detail the git commands you used to remove the node_modules, and
        - in each folder, rm -rf node_modules
        - update .gitignore to ignore /node_modules
        - reinstall packages: npm install in each folder
    - detail the git commands you used to correct the file structure
        - while in Week14Quiz repo, move server folder from inside the client folder outside // server and client folders should be on the same level
        - git command: mv client/server ./ 