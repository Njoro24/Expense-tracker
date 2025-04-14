Expense Tracker
A React application that helps you track and manage your expenses. This application allows you to add, search, sort, and delete expenses with a clean and intuitive user interface.
Features
Core Features

Expense Display: View all expenses in a clean, organized table format
Add New Expenses: Add new expenses through a user-friendly form
Search Functionality: Filter expenses by typing in the search bar
Responsive Design: Works on both desktop and mobile devices

Advanced Features

Sort Expenses: Sort expenses alphabetically by category or description
Delete Expenses: Remove specific expenses from the table


🚀 Technologies Used

React.js
JavaScript (ES6+)
CSS3
HTML5

📋 Project Structure
expense-tracker/
│
├── public/            # Public assets
│   ├── index.html
│   └── ...
│
├── src/               # Source files
│   ├── components/    # React components
│   │   ├── ExpenseForm.js      # Form for adding expenses
│   │   ├── ExpenseForm.css
│   │   ├── ExpenseTable.js     # Table displaying expenses
│   │   ├── ExpenseTable.css
│   │   ├── ExpenseTracker.js   # Main component
│   │   ├── ExpenseTracker.css
│   │   ├── SearchBar.js        # Search functionality
│   │   └── SearchBar.css
│   │
│   ├── App.js         # Main App component
│   ├── App.css        # App styling
│   ├── index.js       # Entry point
│   └── index.css      # Global styling
│
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation
🏁 Getting Started
Prerequisites

Node.js (v14 or later)
npm (v6 or later)

Installation

Clone the repository
git clone https://github.com/Njoro24/Expense-tracker
cd expense-tracker

Install dependencies
npm install

Start the development server
npm start

Open your browser and navigate to http://localhost:3000

🚀 Deployment
This project can be easily deployed to Vercel:

Push your code to a GitHub repository
Visit Vercel and sign up/in
Click "New Project" and import your GitHub repository
Vercel will automatically detect it's a React app and configure the build settings
Click "Deploy" and wait for the deployment to complete
Your app will be live at the URL provided by Vercel!

Usage Instructions
Adding an Expense

Fill in the expense details in the form (Name, Amount, Category, and Description)
Click the "Add Expense" button

Searching for Expenses

Type in the search bar to filter expenses by name or description

Sorting Expenses

Click on the "Category" or "Description" column headers to sort alphabetically
Click again to toggle between ascending and descending order

Deleting an Expense

Click the "Delete" button next to the expense you want to remove

💡 Future Enhancements

Data persistence using local storage or a backend database
Expense categories with color-coding
Expense statistics and reports
User authentication
Dark mode toggle

📝 License
This project is open source and available under the MIT License.
🙏 Acknowledgments

Created as part of a React coding challenge
Design inspired by modern UI/UX principles


Created with ❤️ by Meshack Gikonyo