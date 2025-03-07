# cs-3980-assignment-2

Assigned Work: Create an HTML page to display US population data from Data USA. Upon page load, US Population data is retrieved from an API endpoint, where it is parsed, sorted, and properly displayed in a table.

How to demo the webpage: Clone the repo, then in the file explorer, right click on **"index.html** and select open, then open with any browser of your choice. 

The displayed page looks as shown: 

![image](https://github.com/user-attachments/assets/5a6521dd-217e-4520-a6da-7be0e0703343)

The table can also be viewed in "table.png"

We can see the API call is made in the console in the element "data?drilldowns=Nation.........". To view this, right click anywhere on the webpage, select "inspect", select the "Network" tab in the top right, and refresh the page. 

![image](https://github.com/user-attachments/assets/56982e0b-1c6a-41dd-aae8-741052be3086)

<ins>**Code:**</ins> <br>
**index.html** - contains the structure of the page, I used a table from Bootstrap as recommended in class. <br>
**script.js** - calls the API using a fetch method, getData(), sorts the incoming data from oldest to most recent in years, and adds a new row in the table for each data entry in displayData(). There is also an IIFE function at the bottom of the js file to ensure the data is displayed on each reload. <br>
**styles.css** - I used Bootstrap styling as recommended in class, but also implemented some styling of my own to ensure that the box table was centered and the lines didn't extend toward the end of the page. <br>

Link for Bootstrap: https://getbootstrap.com/docs/5.3/content/tables/


