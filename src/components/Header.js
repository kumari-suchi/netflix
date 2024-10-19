import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import debounce from "lodash.debounce";
import { LOGO, SUPPORTED_LANG, USERICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";
import { FaHome, FaSearch } from "react-icons/fa";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const [isNavigating, setIsNavigating] = useState(false);

  // Debounced navigate function
  const debouncedNavigate = useCallback(
    debounce((path) => {
      setIsNavigating(true);
      navigate(path);
      setIsNavigating(false);
    }, 300),
    [navigate]
  );

  // Handle sign out with debounced navigation in case of error
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful, handle any post-sign-out logic if needed
      })
      .catch((error) => {
        // On error, navigate to the error page using debounced navigate
        debouncedNavigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        debouncedNavigate("/browse"); // Navigate to /browse
      } else {
        dispatch(removeUser());
        debouncedNavigate("/"); // Navigate to home if user is signed out
      }
    });

    // Clean up debounce on unmount
    return () => {
      debouncedNavigate.cancel();
    };
  }, [dispatch, debouncedNavigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="absolute w-screen px-4 sm:px-8 md:px-12 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-32 sm:w-36 md:w-44"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-slate-700 text-white rounded-md text-sm md:text-base"
              onClick={handleLangChange}
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifire} value={lang.identifire}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="font-bold text-white text-sm sm:text-base md:text-xl p-2 m-2 rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? (
              <FaHome className="text-white text-2xl" />
            )  : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 md:w-7 md:h-9 text-white mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.89-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                />
              </svg>
            )}
          </button>
          <img
            className="hidden md:block w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 m-2"
            alt="usericon"
            src={USERICON}
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white text-sm sm:text-base md:text-xl"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
