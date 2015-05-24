Frontend Developer Exercise

Introduction
The purpose of this exercise if for the developer to exhibit his familiarity with frontend technologies, programming patterns and to provide with a sample of what clean and reusable code means to him.

Please inline comment the decisions you have made, and give a summary about the architectural choices that you considered.

Exercise
We will use Yahoo Pipes to create a single page application that presents the latest 10 news. Your goal is to get the latest 10 news from the pipe, along with a small summary and a link for each one. The end result should be a list with the 10 news items, each one consisting of an image and a title. Clicking on an item shows its summary, along with an external link to the original article. You can adjust the UI how you see fit for the best result, but sticking to a single page application is mandatory.

Yahoo Pipes API
The API is in JSON and the link is: http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json&_callback=JSON_CALLBACK  (You can change the callback parameter to any value you want). Clean JSON pipe: http://pipes.yahoo.com/pipes/pipe.run?_id=e9a2e77dffb3205d035c4e311d77bbe6&_render=json 

UI/UX
Try creating something simple, user friendly and eye appealing. Feel free to use any UI resources you’d like to achieve that. For example you could use Twitter Bootstrap, or any other UI library.

Architecture & Libraries
Design your application anyway you want. Please do not use any libraries, only plain vanilla JS.

Backend
None. We should be able to run the exercise, just by opening your index.html file.

Application is aviable on http://enigmatic-headland-6087.herokuapp.com/
