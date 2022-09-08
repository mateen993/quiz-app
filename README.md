# coding-round



 getting all the questions from the question.json
 
 mapping all the questions and extracting the question text and options 
 
 rendering only one  at a time and when answer is selected, show whether the answer is correct or not 
 
 next question button is there to go to the next question
 
this achieved by useState

 handling the correct answer functionality, a function 
 
 ![image](https://user-images.githubusercontent.com/105978906/189077561-d4073e4a-1cd3-452c-a2b5-632ae540d897.png)
 
 ![image](https://user-images.githubusercontent.com/105978906/189077711-a3f1195f-7271-408b-bfb9-382c7014f61a.png)

Minimum score and maximum score are also shown below

![image](https://user-images.githubusercontent.com/105978906/189077993-0a0f5ada-8f7f-4e54-b4c5-ddc957dbfdfe.png)
![image](https://user-images.githubusercontent.com/105978906/189080212-81a450e2-11cb-4c20-a853-b597874d322a.png)



CSS file is globally used for styling the app located in the /coding/src/App.css

2 components are created namingly Quiz.js (for UI and all logic of the app)  and Answer.js (to show whether the answer is correct depending upon
the props passed to this component)


