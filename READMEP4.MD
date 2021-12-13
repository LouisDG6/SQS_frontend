# SQS Project

## Summary
This app is a tracker of all safe spaces for LGBTQ people within the city of NY. Listing each space by borough and describing it for users, as well as informing the user as to where the space is located. Events and organizations will be added in order to assist users with tracking LGBTQ events and organizations.

## Route Table

| Route         | Description   | 
| ------------- | -------------:| 
| Index      | A list of all boroughs |
| Index 2     | A list of all spaces within a borough |
| New | Creating a space |
| Show      | Updating and deleting space |

## Components 

- Borough
- Carousel
- CarouselData
- Footer
- Header
- Space

## Pages
- AllBoroughs
- Form
- SingleBorough
- SingleSpace

## User Stories
- As a user, I can see a list of all five boroughs of NYC
- As a user, I can see a list of all the safe spaces for LGBTQ in each borough
- As a user, I can click on one of the safe spaces and have it take me a page with more on the one space
- As a user, I can create a new space and see that it immediately loads on the page so that I know I successfully added a space
- As a user, I can delete a space so I can keep safe spaces relevant
- As a user, I can update a space in case I need to add information or there were errors

## Component Tree
      - Form
- App - AllBoroughs - SingleBorough - SingleSpace

## Challenges
- Adding the extra page and making it fully functional
- Getting the first index page to relay only boroughs once
- Getting the second index page to display only the bar names
- Connecting the edit and delete properly to the final show page

## Bibliography

Carousel Resource- https://www.youtube.com/watch?v=l1MYfu5YWHc&ab_channel=BrianDesign