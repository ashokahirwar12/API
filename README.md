# User Authentication API (Node.js + Express + MongoDB + JWT)

This project provides a **secure user authentication API** with:
- JWT-based signup and login
- Passwords hashed with bcrypt
- Forgot Password via email reset link
- Reset link expires in 5 minutes
- Fully documented on Postman

## Features

✅ User Signup with:
- First Name
- Last Name
- Email (unique)
- Password (hashed, never plain text in DB)

✅ JWT Token-based Login

✅ Get User Profile (protected route)

✅ Forgot Password:
- Sends reset link on email
- Reset link valid for **5 minutes**
- Allows user to set new password securely

✅ Password Update Flow:
- User clicks reset link → redirected to frontend page with **New Password** and **Confirm Password** fields
- On submit, updates password and hides input with success message
- User can login with the new password

---

## API Endpoints

### 1️⃣ Signup
- **POST** `/api/user/register`
- **Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "password": "yourPassword"
}
