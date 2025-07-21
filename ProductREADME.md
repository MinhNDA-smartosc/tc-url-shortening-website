# Product README: URL Shortening Web App

## Critical Product Parts & Prioritization Criteria

This product is a URL shortening web application built with TypeScript and React, integrating with the CleanURI API. To deliver a robust and user-friendly product, the following parts are prioritized as most critical:

### 1. URL Shortening Functionality

- **Description:** Users must be able to input a URL and receive a shortened version using the CleanURI API.
- **Reason for Priority:** This is the core feature; without it, the product does not fulfill its main purpose.
- **Problems:** CleanURI having CORS error therefore we have to create an independent express project to use it

### 2. Persistence of Shortened Links

- **Description:** Users should see their list of shortened links even after refreshing the browser (handled via localStorage).
- **Reason for Priority:** Essential for usability and user experience, allowing users to keep track of their links across sessions.

### 3. Responsive Layout & Accessibility

- **Description:** The app should look good and function well on both desktop and mobile devices, matching the provided designs.
- **Reason for Priority:** Ensures the product is usable by all target users and meets modern web standards.

### 4. Copy-to-Clipboard Functionality

- **Description:** Users should be able to copy shortened links with a single click.
- **Reason for Priority:** Key convenience feature for a URL shortener, improving user workflow.

### 5. Error Handling & Validation

- **Description:** The form should validate input and show errors for empty or invalid URLs.
- **Reason for Priority:** Prevents user frustration and ensures only valid requests are sent to the API.

---

## Criteria for Prioritization

- **User Journey Impact:** Features that directly affect the main user flow (shortening, viewing, and copying links) are prioritized highest.
- **Reliability:** Persistence and error handling are essential for a professional, reliable product.
- **Usability:** Responsive design and copy-to-clipboard are expected standards for modern web apps.
- **MVP Focus:** Advanced features (e.g., analytics, user accounts) are less critical for a basic MVP and can be added after the above are robust.

---

## Note on Libraries and Tools

The project already leverages React, TypeScript, React Query, React Hook Form, and Zod for schema validation, among others.

---
