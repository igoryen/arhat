arhat /ˈɑːhæt/
=====

Using the fs module

This code demonstrates these methods:

1) fs.readFile()
  accepts three arguments: 
    1. the name of file to read, 
    2. the expected encoding
    3. the callback function.
2) fs.writeFile()

Every time the server receives a request, the script:
1) reads a number from the file, 
2) increments the number, 
3) and writes the new number to the test.txt file.

How to run:

1) Open it in browser (http://localhost:8080) 
2) and refresh it a few times. 

Now, you may think that there is an error in the code because it seems to increment by two. This isn’t an error. Every time you request this URL, two requests are sent to the server. The first request is automatically made by the browser, which requests favicon.ico, and of course, the second request is for the URL (http://localhost:8080).