

# Trustedkit

Brief description of the frontend project.

 Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (recommended version: x.x.x)
- You have installed npm (Node package manager) or Yarn

 Installation

 1. Clone the repository


 1.git clone https://github.com/your-username/your-repo-name.git
 cd your-repo-name

 2. npm i or yarn i

 3. npm run dev or yarn dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


 Details

 Assumptions and Improvements

- **Login Page**: When you visit the application, it will initially redirect you to the login page. The page includes fields for email and password with Zod validation. React Hook Form is utilized for managing the form state. Upon successful authentication, an API key is retrieved from the backend and stored in `localStorage`.

- **Dashboard Page**: After logging in, you will be navigated to the dashboard page where:
  - A popup will appear with relevant information.
  - Dark mode and light mode functionality are implemented.
  - Recharts is used to display a bar chart for sales data.
  - A pie chart visualizes the top 5 products.
  - Sales and order data are also presented.

- **Future Enhancements**:
  - **NextAuth Integration**: Plans to set up NextAuth for login and signup functionalities.
  - **Design Improvements**: Intend to refer to design inspirations from Dribbble for visual enhancements and implementation.


