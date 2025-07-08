import "./App.css";
import Navbar from "./components/Navbar/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Playground from "./pages/Playgroud";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import Problem from "./pages/Problem";
import ProblemList from "./pages/ProblemList";
import CommunityPage from "./pages/Community";
import FrontendList from "./pages/FrontendList";
import CodeEditor from "./pages/CodeEditor";
import FrontendProblemPage from "./pages/FrontendProblemPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="problem"
          element={
            <ProtectedRoute>
              <Problem />
            </ProtectedRoute>
          }
        />

        <Route
          path="/frontendproblem/react-editor"
          element={
            <ProtectedRoute>
              <FrontendProblemPage />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route
            path="/user/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/frontendproblemlist"
            element={
              <ProtectedRoute>
                <FrontendList />
              </ProtectedRoute>
            }
          />

          <Route path="playground/code-editor" element={<CodeEditor />} />

          <Route
            path="problem-list"
            element={
              <ProtectedRoute>
                <ProblemList />
              </ProtectedRoute>
            }
          />
          <Route path="/playground" element={<Playground />} />

          <Route
            path="/community-section"
            element={
              <ProtectedRoute>
                <CommunityPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
