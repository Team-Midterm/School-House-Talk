## User Stories

1. As a Parent, I want to easily know when and where my child needs to go for their sporting events and school functions so that I can more conveniently plan their transportation and know where my child is.  I would also like to be able to communicate with faculty and other parents to plan transportation and meals.
    - Feature Tasks
        - database holding information of
            - events
            - locations
            - student athlete profiles
        - authorization
            - to log in and see their individual child's schedule and information
        - socket server
            - communication between students and faculty
            - communication between parents

1. As a Coach, I want to be able to easily inform parents and students of practice and game times and locations so that the team members can arrive on time.  I would also like to be able to communicate with the parents and students of any changes or information I need to provide individually or to the group.  I want to be able to check administrative information like play eligibility.
    - Feature Tasks
        - socket server based on teams
            - communicate game info (date, time, location), reschedules, game delays to the parents of the athletes
        - authorization
            - to edit events and schedule
        - database
            - to check eligibility and other administrative information

1. As a Student, I want to know I will get to practice and games on time and at the right place.  I also want to be sure
    - Feature Tasks
        - know if I'm playing
        - any changes like delays or locations changes

1. As a Teacher, I want to know the schedule of student athletes so I know when the need to leave class at what times.
    - Feature Tasks
        - know the schedule(when student needs to leave)

1. As a Administrator, I want communication to run smoothly so that the students are at the locations they should be.
    - Feature Tasks
        - database
            - be able to change the student athlete's eligibility
            - change the locations and any game delays
