
# Algochunk

Algochunk is a web application designed to help users practice Data Structures and Algorithms (DSA) problems, frontend machine coding problems, and collaborate with a community of developers. Algochunk aims to provide a seamless and robust coding experience.

## Key Features

- **DSA Practice**: Users can practice 30 hand-picked DSA problems, one per day for 30 days. Problems for upcoming days will be locked.
- **Frontend Machine Coding**: Users can practice frontend machine coding problems on a React editor built using Stack.
- **AI-Powered Code Editor**: Supports nearly all popular coding languages.
- **Community Section**: For interaction and collaboration among users.
- **User Dashboard**: Users can track their progress in DSA, view liked problems, and save problems for future practice.

## Upcoming Features

- **Blog Section**: Users can create and share their blogs.
- **Collaborative Code Editor**: Real-time collaboration using Socket.IO.

## Tech Stack and Tools

- **Frontend**:
  - [ReactJS](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [shadcn](https://shadcn.dev/)
  - [React Router DOM](https://reactrouter.com/)
  - [React Hook Forms](https://react-hook-form.com/)
  - [Zod](https://zod.dev/)
  - [Zustand](https://zustand.surge.sh/)
  - [Axios](https://axios-http.com/)

- **Backend**:
  - [Firebase](https://firebase.google.com/)
  - [judge0](https://judge0.com/)
  - [Google Gemini API](https://ai.google.dev/)

- **Other Tools**:
  - [StackBlitz](https://stackblitz.com/)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Firebase account for backend support.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Utkarshrajmishra/algochunk.git
   ```

2. Navigate to the project directory:

   ```bash
   cd algochunk
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up Firebase:

   - Create a Firebase project.
   - Add your Firebase config to the project.
   - Update .env file.

5. Run the development server:

   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Sign up or log in to start practicing DSA problems, frontend machine coding problems, and interact with the community.

## Contributing

We welcome contributions to improve Algochunk! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
