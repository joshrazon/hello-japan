# Deployed Product/Services Website

## [Project setup](https://github.com/sait-wbdv/assessments/blob/master/cpnt262/final/README.md)

### Members
  - Ariel Xiaomiao Zhang
  - Joshua Razon
  - Kevin Akari Taguchi
  - Simeon Osoko

### [Tasks Assignment](https://github.com/joshrazon/hello-japan/blob/main/task-assignment.md)
  - List of tasks for each member to complete

### Tasks
- Front End 

  - Accessible and responsive navigation
  - Accessible forms
  - Accessible and semantic images
  - Responsive galleries and card layouts
  - 404 page 

- Back End 

  - ./seeds 
  - Mongoose connection authenticated using .env file.
    - .on event for errors
    - .once event for successful connection
  - EJS View Setup
  - Schema/model implementations
    - gallery
    - member
    - subscriber
  - JSON endpoints
    - GET /api/v0/gallery
    - Subscriber list
      - POST /subscribers
      - GET /api/v0/subscribers
      
    - Team member
      - GET /api/v0/members

- Both

  - Server routing / Pages
    - /subscribe
    - /gallery
    - /team
    - /admin
    - /gallery/:id

  - Front end fetch() / routing
  
    - Requests GET /api/v0/gallery for GET /gallery
    - Requests GET /api/v0/subscribers for GET /admin
    - Requests GET /api/v0/members for GET /team
 


 