# IT 313 Laboratory 6 – Student Directory Viewer

**Student Name:** Vincent Clarence Perez  
**Project Name:** IT313_Perez_VincentClarence_CoreComponents

## 1. Project Overview

The Student Directory Viewer is a mobile application developed using React Native and Expo. It demonstrates the use of React Native Core Components to display student information, search for students, and flag students for advising.

## 2. Problem Solved

Managing student information manually can be difficult, especially when searching for a particular student or identifying students who need academic advising.

This application provides a simple and organized student directory where users can:

- View student profiles and information.
- Search for students by name.
- Filter student records using a search input.
- Flag or unflag students who need advising.
- View student information through reusable components.

## 3. React Native Core Components Used

- **View** – Organizes the layout and groups elements.
- **Text** – Displays student names, year levels, and labels.
- **Image** – Displays student profile pictures.
- **ScrollView** – Allows users to scroll through the student directory.
- **TextInput** – Allows users to search for students.
- **Pressable** – Provides an interactive button for flagging students.
- **StyleSheet** – Organizes the application's styles.

## 4. Project Components

### StudentCard

A reusable component that displays an individual student's photo, name, year level, and advising flag button.

### StudentDirectory

The main screen that manages the student records, search functionality, filtering, and flagging operations.

## 5. Requirements Before Running

Make sure the following are installed:

- Node.js
- Visual Studio Code
- Expo Go application on your mobile phone
- npm (included with Node.js)

Your computer and mobile phone should be connected to the same Wi-Fi network when using the local development connection.

## 6. How to Install and Run the Project

### Step 1: Open the Project

Open the project folder in Visual Studio Code.

### Step 2: Open the Terminal

In Visual Studio Code, click **Terminal → New Terminal**.

### Step 3: Install Dependencies

Run this command:

```bash
npm install
```

Wait until the installation finishes.

### Step 4: Start the Expo Development Server

Run:

```bash
npx expo start
```

Wait for the QR code to appear in the terminal.

### Step 5: Open the Application Using Expo Go

1. Install and open Expo Go on your Android or iOS phone.
2. Make sure your phone and computer are connected to the same Wi-Fi network.
3. Scan the QR code displayed in the terminal.
4. Wait for the application to load.
5. The Student Directory Viewer should appear on your phone.

**Alternative:** If the QR code does not connect, press `s` or check the Expo terminal options. You may also try:

```bash
npx expo start --tunnel
```

### Step 6: Test the Application

- View the displayed student profiles.
- Enter a student's name in the search bar.
- Check whether the directory filters the results.
- Press the **Flag for Advising** button.
- Check whether the button changes its appearance and label.

## 7. Controlled and Uncontrolled TextInput Experiment

The application initially uses a controlled TextInput through the `value` and `onChangeText` properties.

For the experiment, these properties are temporarily removed to observe the difference between controlled and uncontrolled input behavior.

After the experiment, restore the properties to make the search functionality work correctly.

## 8. How to Stop the Application

To stop the Expo development server, return to the terminal and press:

```bash
Ctrl + C
```

## 9. Project Start Command

To run the application again in the future, open the project folder and execute:

```bash
npx expo start
```

## 10. Conclusion

This project demonstrates how React Native Core Components work together to create a functional Student Directory Viewer. It applies reusable components, state management, user input, list rendering, and interactive controls.
