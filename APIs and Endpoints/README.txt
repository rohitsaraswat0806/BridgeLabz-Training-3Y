ASSIGNMENT 10 - APIs AND ENDPOINTS

Folder structure:
Each question has its own folder containing:
- db.json
- index.html (HTML and CSS in the same file)
- script.js

IMPORTANT:
- Each db.json contains at least 5 sample records.
- Each question uses ONLY its own db.json.
- Each JSON Server uses a different port.
- Keep the JSON Server terminal running while using the page.

SETUP:
1. Install Node.js.
2. Open a terminal in the question folder.
3. Run this command (first time or if JSON Server is not installed):
   npm install -g json-server@0.17.4

START EACH QUESTION IN A SEPARATE TERMINAL:
Q1: cd Q1_RealTimeLiveSearch
    json-server --watch db.json --port 3001

Q2: cd Q2_EmployeeStatusDashboard
    json-server --watch db.json --port 3002

Q3: cd Q3_TaskManagerWithFilters
    json-server --watch db.json --port 3003

Q4: cd Q4_MultiAPIDashboard
    json-server --watch db.json --port 3004

Q5: cd Q5_CollegeTimetableViewer
    json-server --watch db.json --port 3005

Q6: cd Q6_UserRegistrationDuplicateCheck
    json-server --watch db.json --port 3006

OPEN THE PAGE:
After starting the matching JSON Server, open that question's index.html
in your browser. You can use VS Code Live Server as well.

API ENDPOINTS:
Q1: http://localhost:3001/products
Q2: http://localhost:3002/employees
Q3: http://localhost:3003/tasks
Q4: http://localhost:3004/users, /orders, /products
Q5: http://localhost:3005/timetable?day=Monday
Q6: http://localhost:3006/users?email=aman@example.com

NOTE:
- Q1 uses jQuery AJAX.
- Q2 uses XMLHttpRequest GET and PATCH, with UI rollback on failure.
- Q3 uses jQuery AJAX query parameters and PATCH.
- Q4 uses Fetch and Promise.all.
- Q5 uses Fetch and dynamic rendering.
- Q6 uses Axios GET and POST with duplicate email checking.
- Q4 displays a warning if an API request fails. Skeleton placeholders are shown while requests are pending.
