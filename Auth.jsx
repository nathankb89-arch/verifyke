import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

    import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import {
  auth,
  googleProvider,
  githubProvider,
  facebookProvider,
} from '../firebase'

function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleAuth = async (loginMode = isLogin) => {
    setError('')
    setLoading(true)

    try {
      if (loginMode) {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
      }

      navigate('/home')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const signup = async () => {
    await handleAuth(false)
  }

  const login = async () => {
    await handleAuth(true)
  }

  const handlePopupLogin = async (provider) => {
    setError('')
    setLoading(true)

    try {
      await signInWithPopup(auth, provider)
      navigate('/home')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const googleLogin = () => handlePopupLogin(googleProvider)
  const githubLogin = () => handlePopupLogin(githubProvider)
  const facebookLogin = () => handlePopupLogin(facebookProvider)

  const toggleMode = () => {
    setError('')
    setIsLogin((prev) => !prev)
  }

  return (
    <div className='max-w-md mx-auto mt-20 bg-slate-900 p-8 rounded-3xl border border-slate-800'>

      <h1 className='text-4xl font-bold mb-8 text-center'>
        VerifyKE Auth
      </h1>

      <input
        type='email'
        placeholder='Enter email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='w-full mb-4 p-4 rounded-2xl bg-slate-800 outline-none'
      />

      <input
        type='password'
        placeholder='Enter password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='w-full mb-6 p-4 rounded-2xl bg-slate-800 outline-none'
      />

      <button
        onClick={signup}
        className='w-full bg-cyan-500 text-black font-bold py-4 rounded-2xl mb-4 hover:bg-cyan-400 transition'
      >
        Sign Up
      </button>

      <button
        onClick={login}
        className='w-full bg-white text-black font-bold py-4 rounded-2xl mb-6 hover:bg-slate-200 transition'
      >
        Login
      </button>

      <div className='space-y-4'>

        <button
          onClick={googleLogin}
          className='w-full bg-red-500 py-4 rounded-2xl font-bold hover:scale-105 transition'
        >
          Continue With Google
        </button>

        <button
          onClick={githubLogin}
          className='w-full bg-gray-700 py-4 rounded-2xl font-bold hover:scale-105 transition'
        >
          Continue With GitHub
        </button>

        <button
          onClick={facebookLogin}
          className='w-full bg-blue-600 py-4 rounded-2xl font-bold hover:scale-105 transition'
        >
          Continue With Facebook
        </button>

      </div>

    </div>
  )
}

export default Auth