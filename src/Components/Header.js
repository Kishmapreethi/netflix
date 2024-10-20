import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO} from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector(store => store.user)
console.log(user)
  useEffect(() => {
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
             uid: uid,
              email: email, 
              displayName: displayName,
              photoURL :photoURL }));
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
    return ()=> unsubscribe();
  }, [])

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
