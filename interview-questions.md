# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:
  Your answer: Cohort and Student are two different data tables that are being linked to each other. This mistake can be fixed by incorporating the belongs_to statement in the Student model. If the Cohort model contains the has_many statement, then it makes sense for the student model to have this statement.

  Researched answer:
  Researched answer: The foreign key must be assigned to a model that is plural, not singular. In this example, the plural model is Student because a cohort has many students. The name of the foreign key would be student_id because the naming convention for foreign keys is modelname_id.

2. Which RESTful routes must always be passed params? Why?

  Your answer:
  Your answer: The main routes that must always be passed are the show, create, update, and delete routes. These routes involve executing a certain action on a specific piece of data. When learning about RESTful routes, I remember always having to use the find() method while passing the params.

  Researched answer:
  Researched answer: After researching I realized  that the routes that must always be included are the .show, .edit, and .destroy parameters.

3. Name three rails generator commands. What is created by each?

  Your answer:
  Your answer: The rails generator commands are responsible for creating the Model and Controller for a rails application. The routes.rb file does not need to be updated if the generate Resource command was ran. It is similar to the rails generate Model command but adds more dependencies to the app.

  Researched answer:
  Researched answer: The rails generate model command is responsible for creating the name of a model. The rails generate Controller command adds more important files to a rails app. These files can then be modified so that the controller can route external requests to internal actions. All of the files get added in one command making it a lot more utility.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students
The INDEX method would display all of the rows in the database.

action: "POST"   location: /students
Controller method: index - The index method would show all of the students currently in the database.

action: "POST"   location: /students
Controller method: create - The create method would input new data into the database.

action: "GET"    location: /students/new
Controller method: new - The new method would show a form to input a new student into the database.

action: "GET"    location: /students/2  
Controller method: show - The show method would shoe only one student depending on the params that was passed in the url.

action: "GET"    location: /students/2/edit
Controller method: edit - The edit method is similar to the new method and would show a form to edit information about a student that is already in the database.

action: "PATCH"  location: /students/2
The UPDATE method would be passed changes as arguments. The row with the primary key "2" is what the arguments would update.

action: "DELETE" location: /students/2
Controller method: update - The update method would modify an existing student in the database.
action: "DELETE" location: /students/2

Controller method: destroy - The destroy method would remove a student from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see a list of all the tasks on the home page of the application.

2. As a user, I can click on a task on the home page and be directed to a page where I can see the completion status of the task that I have clicked.

3. As a user, I can navigate from the show page back to the home page.

4. As a user, I can click a button that will take me from the home page to a page where I can add an additional task to the list.

5. As a user, I see a form where I can create a new task to add to the list.

6. As a user, I can update the title of the task on the to-do list.

7. As a user, when I submit a new task, I am redirected to the home page.

8. As a user, I can delete a tasks from the to-do list.

9. As a user, I can update the completion status of tasks on the to-do list.

10. As a user, I can click a button that will submit new tasks to the database.
