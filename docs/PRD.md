# **Product Requirements Document (PRD)**

**Project Name:** Random Quote Generator

**Version:** 1.0

**Date:** February 2025

**Owner:** Michael

---

## **1. Overview**

### **1.1 Purpose**

The **Random Quote Generator** is a simple web application that displays a randomly selected quote when a user clicks a button. The app will help me learn how to instruct AI to build an app in steps using Cursor.

### **1.2 Scope**

The application will:

- Display a random quote when a button is clicked.
- Use Zen Quotes API [https://zenquotes.io/api/random] to fetch a random quote.
- Have a simple and clean front-end interface.

---

## **2. Features & Requirements**

### **2.1 Functional Requirements**

- **Quote Display:** A section to show the current quote.
- **Generate Button:** A button labeled **"Generate Quote"** that fetches and displays a new quote.
- **Data Source:** Quotes can come from Zen Quotes API
- **Loading State:** Show a loading state while fetching a new quote.
- **Responsiveness:** The UI should be mobile-friendly.

### **2.2 Non-Functional Requirements**

- **Performance:** The quote should be fetched instantly with minimal delay.
- **Maintainability:** The code should be structured and easy to modify.

---

## **3. User Flow**

1. The user visits the app.
2. A default quote is displayed on page load.
3. The user clicks the "Generate Quote" button.
4. A new quote replaces the previous one.
5. The process repeats when the button is clicked again.

---

## **4. Tech Stack**

- **Front-end:** React with Tailwind CSS
- **Quote Source:** Zen Quotes API [https://zenquotes.io/api/random]
- **Deployment:** GitHub Pages

---

## **5. UI Design**

- Minimalist design with a **quote box** and a **button below it**.
- Centered layout for readability.
- Use a **smooth transition effect** when switching quotes.

---
