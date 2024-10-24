import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggeGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const showGptsearch=useSelector((store)=>store.gpt.showGptsearch);
  const user = useSelector(store => store.user)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    //Unsubscribe when component unmounts(cleanup)
    return () => unsubscribe();
  }, [])

  const handleGPTsearchclick = () => {
    //Tooggle GPT search
    dispatch(toggeGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
      navigate('/error');
    });
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="Logo" />
      {user &&
        <div className='flex p-2'>
          {showGptsearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang =>
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            )}
          </select>}
          <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGPTsearchclick}>{showGptsearch ? "HomePage" : "GPT Search"}</button>
          <img
            className='w-12 h-12'
            src={user.photoURL}
            alt="usericon" />
          <button className='font-bold text-white' onClick={handleSignOut} >(Sign Out)</button>
        </div>
      }
    </div>
  )
}

export default Header
