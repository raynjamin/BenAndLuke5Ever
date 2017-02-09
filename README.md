# BenAndLuke5Ever
Whatever we want

## ADDITIONAL INFORMATION PLEASE READ

While most of the information in the video is perfect and without flaws, there are a couple more takeaways from this project
than what was discussed.

1. Take note of the DemoApplication class. It contains details on how to customize session cookies. This will
be crucial to enable session-based AJAX requests.
2. Backend users will likely be running Spring through IntelliJ. This is all well and good. Frontend users will need a
different approach. To start the server locally, type `heroku local web -f Procfile.local`. (You should take the Procfile.local
from this repository).
3. If you are using a database, which is basically 95% of you, you need a ".env" file in the root of your repository. ***THIS FILE
SHOULD NOT BE IN SOURCE CONTROL***. You can add this .env file to the .gitignore so that it will be safely ignored from git.
The contents of this file will give heroku local environment variables to use. The format is such: `JDBC_DATABASE_URL=jdbc:postgresql://localhost:5432/testdatabase`
4. Frontend Users, you will likely need to install Postgres. The best way to do this on OSX is to find Postgres.app and install it.
Make sure to include the step where you copy a command called psql.
5. Initially, and when the backend changes structural database stuff, you'll have to run `psql databasename`, followed by `drop database databasename;` and then `create database databasename;` (clearly
replace "databasename" with whatever database name you have chosen for the project.)

That's it! That's all you need. Easy right?


