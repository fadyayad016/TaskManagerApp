React Native Task Manager App
This is a simple task manager application built with React Native and Expo. It allows users to add, view, complete, and delete tasks. This project was created as a part of the front-end tech screen for the company Chapter One.

Features
Add a Task: Users can type a task into the input field and press "Add" to add it to their list.

View All Tasks: All current tasks are displayed in a clean, scrollable list.

Mark as Complete: Tapping on a task toggles its completion status. Completed tasks are visually distinguished with a checkmark and a line-through style.

Delete a Task: Each task has a "Delete" button to permanently remove it from the list.

How to Run the Project
Prerequisites
Node.js (LTS version recommended)

Expo Go app on your iOS or Android device

Setup & Running
Clone the repository:

git clone <https://github.com/fadyayad016/TaskManagerApp.git>

Navigate to the project directory:

cd TaskManagerApp

Install dependencies:

npm install

Start the development server:

npx expo start

Scan the QR code with the Expo Go app on your mobile device.

Third-Party Libraries Used
This project was bootstrapped using create-expo-app and relies on the standard libraries provided by the Expo SDK. No additional third-party UI or state management libraries were added, as the requirements were fulfilled using React Native's built-in components and React's useState hook for local state management.