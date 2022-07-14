# Travee 
Travee is inspired from yelp.com. Travee is a web Application in which users can find tourist places and review them. Users can also add their own tourist spots. A map has also been displayed for better searching. I have completely revamped the UI and made it into a light and dark mode for reducing eye strain. It is already populated with Indian cities.
# Built with
### Front End
   * HTML, CSS, Bootsrap v5.0
   * EJS, EJS Mate
### Back End
  * NodeJS
  * ExpressJS
  * MongoDB
  * cloudinary
  * MapBox
  * passport(local-strategy)
  * JOI
  * connect-flash
  * morgan
  * sessions
# Specifications
## Authentication
* User can register and login
* Used Passport for that purpose
## Authorization
* User needs to be logged in to make any change(add,update or delete)
* A user can only alter his posts or reviews
## Functionalities
* Tourist spots are marked on a cluster map using Mapbox API
* Client side and server side validations are done
* Images of tourist places are uploaded to Cloudinary
* Images can be added and deleted after creation of tourist spots
* CRUD functions have been implemented on tourist spots
* Flash messages are displayed
* Every tourist spot has it's location displayed seperately on a map
 # Deployed using Heroku, database on MongoDB Atlas.
