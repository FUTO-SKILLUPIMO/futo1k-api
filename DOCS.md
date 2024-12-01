
# **API Documentation**

## **Base URL**  
`https://futo1k-api.onrender.com/api`

---

## **Authentication Endpoints**

### **1. Register a New User**  
**Endpoint**: `POST /auth/register`  
**Description**: Registers a new user.  

#### Request:  
- **Headers**:  
  `Content-Type: application/json`  
- **Body**:  
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### Response:  
- **Success (201)**:  
  ```json
  {
    "message": "User registered successfully",
    "token": "<jwt_token>"
  }
  ```

- **Error (400)**:  
  ```json
  {
    "message": "User already exists"
  }
  ```

---

### **2. Login**  
**Endpoint**: `POST /auth/login`  
**Description**: Logs in an existing user.  

#### Request:  
- **Headers**:  
  `Content-Type: application/json`  

- **Body**:  
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

#### Response:  
- **Success (200)**:  
  ```json
  {
    "message": "Login successful",
    "token": "<jwt_token>"
  }
  ```

- **Error (400)**:  
  ```json
  {
    "message": "Invalid credentials"
  }
  ```

---

### **3. Get Logged-In User Info**  
**Endpoint**: `GET /auth/me`  
**Description**: Fetches the details of the authenticated user.  

#### Request:  
- **Headers**:  
  `Authorization: Bearer <jwt_token>`  

#### Response:  
- **Success (200)**:  
  ```json
  {
    "user": {
      "_id": "64e8a123...",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```

- **Error (401)**:  
  ```json
  {
    "message": "No token, authorization denied"
  }
  ```

---

## **Campaign Endpoints**

### **1. Get All Campaigns**  
**Endpoint**: `GET /campaigns`  
**Description**: Retrieves a list of all campaigns.  

#### Request:  
- **Headers**:  
  `Authorization: Nill`  

#### Response:  
- **Success (200)**:  
  ```json
  [
    {
      "_id": "64e8f893...",
      "title": "Build a School",
      "description": "Helping build a school in rural areas.",
      "targetAmount": 10000,
      "currentAmount": 2500
    },
    {
      "_id": "64e8f894...",
      "title": "Clean Water Project",
      "description": "Providing clean drinking water.",
      "targetAmount": 5000,
      "currentAmount": 4500
    }
  ]
  ```

---

### **2. Get Campaign Details**  
**Endpoint**: `GET /campaigns/:id`  
**Description**: Fetches detailed information about a specific campaign by its ID.  

#### Request:    
- **Params**:  
  `id` - The ID of the campaign.

#### Response:  
- **Success (200)**:  
  ```json
  {
    "_id": "64e8f893...",
    "title": "Build a School",
    "description": "Helping build a school in rural areas.",
    "targetAmount": 10000,
    "currentAmount": 2500
  }
  ```

- **Error (404)**:  
  ```json
  {
    "message": "Campaign not found"
  }
  ```

---

### **3. Support a Campaign**  
**Endpoint**: `POST /campaigns/:id/support`  
**Description**: Supports a campaign by contributing a specific amount.  

#### Request:  
- **Headers**:  
  `Authorization: Bearer <jwt_token>`  

- **Params**:  
  `id` - The ID of the campaign to support.  

- **Body**:  
  ```json
  {
    "amount": 100
  }
  ```

#### Response:  
- **Success (200)**:  
  ```json
  {
    "message": "Contribution successful",
    "campaign": {
      "_id": "64e8f893...",
      "title": "Build a School",
      "currentAmount": 2600
    }
  }
  ```

- **Error (400)**:  
  ```json
  {
    "message": "Amount must be greater than 0"
  }
  ```

- **Error (404)**:  
  ```json
  {
    "message": "Campaign not found"
  }
  ```

---

### **4. Get User's Supported Campaigns**  
**Endpoint**: `GET /user/dashboard`  
**Description**: Retrieves the list of campaigns that the user has supported and the total amount contributed.  

#### Request:  
- **Headers**:  
  `Authorization: Bearer <jwt_token>`  

#### Response:  
- **Success (200)**:  
  ```json
  {
    "supportedCampaigns": [
      {
        "campaignId": "64e8f893...",
        "title": "Build a School",
        "contributedAmount": 100
      },
      {
        "campaignId": "64e8f894...",
        "title": "Clean Water Project",
        "contributedAmount": 200
      }
    ],
    "totalContributed": 300
  }
  ```

---

## **Error Responses**

- **401 Unauthorized**  
  ```json
  {
    "message": "Authorization token is missing or invalid"
  }
  ```

- **404 Not Found**  
  ```json
  {
    "message": "Resource not found"
  }
  ```

- **500 Internal Server Error**  
  ```json
  {
    "message": "Server error, please try again later"
  }
  ```

---
