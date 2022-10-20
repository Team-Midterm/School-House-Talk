# Software Requirements

## Vision

What is the vision of this product?

* To ease communication concerns as it relates to school events.

What pain point does this project solve?

* It creates a single source of truth by school staff to relay important information to parents and students.

Why should we care about your product?

* Provides real-time updates regarding school events and changes

## Scope

**IN**
Describe the individual features that your product will do.
High overview of each. Only need to list 4-5

* Communicate school events to students/parents/teachers
* Show student athletes eligibility
* inform student/parent teacher of event changes
* allows Admin/coaches to securely edit information to send to parents/teachers/students

**OUT**
Product will not

* act as a chat between students/teachers/coaches/admin

## Minimum Viable Product

What will your MVP functionality be?

* app will allow coaches and admin to send event information via sms/email.
* Users (students/teachers/parents) will subscribe to a specific event(sport) and will receive event information and real-time updates.
* Admin/Coaches will have proper authorization to make changes to data tables that contain event information and users.

What are your stretch goals?

* add multiple events and sports
* allow a chat functionality for parents
* allow admin/teachers to determine student eligibility with the app

## Functional Requirements

* An admin can create events which will send event announcements to the specific sport
* A coach can update information for all events which will send event announcements to the specific sport
* students/parents will be able to view updates to rooms they are subscribed to
* teachers will receive all announcements and updates

Data Flow

## Non-Functional Requirements

Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

3-5 sentences

* testability:
  * tests will be run to verify coaches/Admin can create, read, update, and delete items from database
  * test will be run to verify that students/teachers/parents will NOT be able to create, read, update, and delete items from database
  * test will be run to verify messages are being sent/received to event rooms when information in the database is updated

* Security:
  * tests to verify functionality of authorization to verify coaches and Admin can access the database
  * test will be run to verify students/teachers/parents will not have access the database
  * test students/parents are subscribes to the correct room by verifying the sport indicated
