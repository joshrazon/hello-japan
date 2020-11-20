# CPNT262-Final: Deployed Product/Services Website

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

### Attributions
- [404 Page Codepen](https://codepen.io/purplexmoss/pen/PoPyzMW)
- [unsplash](https://unsplash.com/) for all images
### GET Routes
- /group-tours
  - Shows a gallery of available tours that you can go on
- /subscribe
  - Subscribe to newsletter form 
  - Signing up will redirect to a confirmation page that repeats the inputted name and email
- /admin
  - Shows a list of current subscribers' name and email
- /team
  - About us page, shows our group members and some long form text
- /group-tours/:id 
  - Shows a single tour based where tourid
- /
### API Routes
- /api/v0/subscribe
  - sends back a list of subscribers
- /api/v0/tours
  - sends back a list of tours
- /api/v0/team
  - sends back a list of our team members

### Tasks
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
 


 