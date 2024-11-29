import './App.css'
import {AuthProvider} from "./context/AuthContext/AuthContext.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./Layout";
import {routes} from "./constants";

function App() {

    return (
        <>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route element={<PrivateRoute><Layout /></PrivateRoute>}>
                            {routes
                                .filter(route => route.isProtected)
                                .map(({ path, element }) => (
                                    <Route key={path} path={path} element={element} />
                                ))}
                        </Route>
                        {routes
                            .filter(route => !route.isProtected)
                            .map(({ path, element }) => (
                                <Route key={path} path={path} element={element} />
                            ))}
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    )
}

export default App
