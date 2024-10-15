# Dynamic Form Builder API

This project is a **Dynamic Form Builder API** built using **Express.js** and **MongoDB**. The API allows clients to create forms with various types of fields (e.g., text inputs, dropdowns, checkboxes), save the form structure to a database, and retrieve the form data.

## Features

- Create forms dynamically with different input types (text, dropdown, checkboxes, etc.).
- Save form structure and field options to MongoDB.
- Fetch form structure via the API.
- Handle required and optional form fields.

## Technologies Used

- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework)
- **MongoDB** (Database)
- **Mongoose** (for MongoDB)
- **Postman** (API testing)

## API Endpoints

### Create a New Form

- **POST** `/api/forms`
- This endpoint allows you to create a new form.

![{163348FA-2FA3-45DA-B651-C969FF03BE6C}](https://github.com/user-attachments/assets/32ecc901-73c7-47f4-aa82-54c781d51ae0)

### Find form by id

- **POST** `/api/forms/:id`
- This endpoint allows you to find form by id

![{EC3E7D64-F484-453A-A3DE-6EC562EDBD3A}](https://github.com/user-attachments/assets/e8c7f8c8-72b4-403b-9e80-c6b62c577904)

### Update Form

- **POST** `/api/forms/update/:id`
- This endpoint allows you to update form

![{ED5E53A8-C360-473F-A653-B3823361A990}](https://github.com/user-attachments/assets/a4406b76-d9e2-4c4c-ab6a-1dbeb944187f)

### Submit Form (send response)

- **POST** `/api/forms/submit`
- This endpoint allows you send response to db






