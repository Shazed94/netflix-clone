import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authUser.js";
import { useEffect } from "react";
import { LoaderCircle } from "lucide-react";
import WatchPage from "./pages/WatchPage.jsx";
import NotFoundPage from "./pages/404.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import SearchHistoryPage from "./pages/SearchHistoryPage.jsx";

function App() {
  const { user, isCheckingAuth, authCheck } = useAuthStore();

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  if (isCheckingAuth) {
    return (
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <LoaderCircle className="animate-spin text-red-600 w-10 h-10" />
        </div>
      </div>
    );
  }
  console.log(user);
  return (
    <>
      <Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
				<Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to={"/"} />} />
				<Route path='/watch/:id' element={user ? <WatchPage /> : <Navigate to={"/login"} />} />
				 <Route path='/search' element={user ? <SearchPage /> : <Navigate to={"/login"} />} />
				<Route path='/history' element={user ? <SearchHistoryPage /> : <Navigate to={"/login"} />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
