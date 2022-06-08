# JS Frameworks - Course Assignment

![image](https://res.cloudinary.com/dhd2paq70/image/upload/v1654681042/amazing_bvhg5f.jpg)

An overview of the products is shown in a grid at the homepage.

## Description

A simple app created in React that uses JWT tokens from a Wordpress extension for login functionality.
It fetches some random products from the Fake Store API and displayes some of the properties on the product cards and the details pages.

<h2>Assignment requirements:</h2>

The app should have the following paths:

- "/"
- "/detail/:param"
- "/contact"
- "/login"
- "/admin"

The admin path should not appear in the navigation.

<h4>Homepage:</h4>

Find an API that returns at least:

- an array of items
- a single item retrieved by a parameter (id, name, slug, etc)

Display at least 2 properties from each result.

Each result should link to the detail page, passing a parameter in the URL.

<h4>Details page:</h4>

Retrieve the parameter from the URL and use it in an API call to fetch one item.

Display at least 3 properties from the item.

<h4>Login:</h4>

- Create a form with username/email and password fields. The inputs should have the necessary validation for a login form.
- The form should make a login request to either a Wordpress API with the JWT plugin installed or a Strapi API. If the login is successful redirect the user to the admin route.
- If the login is unsuccessful display a message above the form.

<h4>Admin page:</h4>

- This page will simply display an "Admin" heading.

<h4>Contact page:</h4>

Create a form with the following inputs and validation:

- First name - required, minimum 3 characters
- Last name - required, minimum 4 characters
- Email - required, must be in a valid email format
- Subject - required, this must be a select box with at least 2 options
- Message - required, minimum 10 characters.

## Built With

- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [Sass](https://sass-lang.com)

## Getting Started

### Installing

This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

1. Clone the repo:

```bash
git clone git@github.com:Noroff-FEU-Assignments/js-frameworks-course-assignment-7oiden.git
```

2. Install the dependencies:

```
npm install
```

### Running

To run the app, run the following commands:

```bash
npm run start
```

## Contact

Get in touch at:

[LinkedIn](https://www.linkedin.com/in/tommy-j-16b56678/)
