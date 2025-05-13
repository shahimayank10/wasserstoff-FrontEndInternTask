This React-based web application allows users to generate their personalized ticket for a coding conference. The form collects user details such as full name, email, GitHub username, and a profile image, then generates a digital ticket.

🚀 Features
Upload your avatar (JPG or PNG).

Enter your full name, email, and GitHub username.

Instantly generate a custom conference ticket.

Clean and responsive UI using Tailwind CSS.

🖼️ Preview


🛠️ Technologies Used
React

Tailwind CSS

JavaScript (ES6+)

FileReader API

📥 Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/ticket-generator.git
cd ticket-generator
Install dependencies

bash
Copy
Edit
npm install
Start the development server

bash
Copy
Edit
npm run dev
🧾 Usage
Fill in the form with your:

Full name

Email

GitHub username

Avatar image (PNG or JPG under 500KB)

Click "Generate my ticket".

A personalized ticket will be created and displayed (based on setTicket logic).

📁 Code Overview
Form.jsx: Contains the form and logic to capture and process user input.

Utilizes FormData and FileReader to convert image input into base64 format.

Calls setTicket with all form data and image encoded string.

