# Fabric Clothing App

## Installation 💻

To run the Fabric Clothing App locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/Nidhish-D-Nayak/crwn-clothing-v2-graphql.git
   ```

2. Navigate to the project directory:

   ```sh
   cd crwn-clothing-v2-graphql
   ```

3. Install the dependencies:

   ```sh
   yarn install
   ```

4. Set up Firebase:

   - Create a Firebase project and obtain the necessary configuration credentials.
   - Copy the Firebase configuration object into the `src/utils/firebase/firebase.utils.js` file.
   - Enable the desired Firebase authentication methods (e.g., Email/Password, Google, etc.).

5. Start the development server:

   ```sh
   yarn start
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the Fabric Clothing App.

## Technologies Used 🔧

- **React:** JavaScript library for building user interfaces.
- **Styled Components:** CSS-in-JS library for styling React components.
- **Firebase:** Backend-as-a-Service (BaaS) platform for authentication, database, and storage.
- **GraphQL:** Query language for APIs.

## Folder Structure 📂

Here's an overview of the project's folder structure:

```
├── public/             # Public assets and HTML template
├── src/
│   ├── assets/         # Assets used in the application
│   ├── components/     # Reusable React components
│   ├── contexts/       # State management contexts
│   ├── routes/         # Top-level application pages
│   └── utils/          # Utility functions and constants - Firebase & Reducer
└── ...
```

## Contributing 🤝

We welcome contributions to the Fabric Clothing App project! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push the changes to your forked repository: `git push origin feature-name`.
5. Open a pull request to the main repository's main branch.

## License 📝

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.

## Contact 💬

If you have any questions, suggestions, or feedback, please don't hesitate to reach out. You can contact the project maintainer at nidhibelthangady@gmail.com.

Happy shopping with the Fabric Clothing App! 🛍️
