import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { AiFillGithub } from "react-icons/ai"

import apiCall from './api_utils/openai'

const navigation = [
  { name: 'Home', href: '#' },
  // { name: 'Project (GitHub)', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function App() {
  const [formData, setForm] = useState({
    fav_sub1: "a",
    fav_sub2: "",
    fav_sub3: "",
    dream_job1: "",
    dream_job2: "",
    performance: "",
    country: "Ghana",
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [processing, setProcessing] = useState(false);

  const [suggestions, setSuggestions] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    setProcessing(true)
    apiCall(formData).then((res) => {
      setSuggestions(res);
      setProcessing(false);
      document.getElementById('suggestions').scrollIntoView();
    })
    
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h2 className='text-xl font-bold'>UniPath</h2>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
            <a href="https://github.com/janprince" className="text-sm font-semibold leading-6 text-gray-900" target='_blank'>
                <AiFillGithub size={20} className='mt-1'/>
              </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Don't Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h2 className='text-xl font-bold'>UniPath</h2>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Don't Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      {/* INTRO */}
      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#9adef8] to-[#b2bdee] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-24">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Powered by GPT 3.5
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Tailored University Programs for Your Passion
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Maximize Your Academic Success with Our Innovative AI-Powered University Program Recommender. Smarter, Better👌.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#interests"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Try It Out <span aria-hidden="true">↓</span>
              </a>
              {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a6d9ee] to-[#afbcf8] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      {/* FORM */}
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="interests">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a5e0f8] to-[#b4c2fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Share Your Interests</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-3xl sm:mt-20" onSubmit={handleSubmit} method='POST'>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          {/* fav1 */}
          <div>
            <label htmlFor="fav1" className="block text-sm font-semibold leading-6 text-gray-900">
            1st Favourite Subject
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="fav1"
                id="fav1"
                value={formData.fav_sub1}
                onChange={(e) => setForm({...formData, fav_sub1:e.target.value})}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* fav2 */}
          <div>
            <label htmlFor="fav2" className="block text-sm font-semibold leading-6 text-gray-900">
              2nd Favourite Subject
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="fav2"
                id="fav2"
                value={formData.fav_sub2}
                onChange={(e) => setForm({...formData, fav_sub2:e.target.value})}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* fav3 */}
          <div>
            <label htmlFor="fav3" className="block text-sm font-semibold leading-6 text-gray-900">
              3rd Favourite Subject
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="fav3"
                id="fav3"
                value={formData.fav_sub3}
                onChange={(e) => setForm({...formData, fav_sub3:e.target.value})}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* performance */}
          <div>
            <label htmlFor="performance" className="block text-sm font-semibold leading-6 text-gray-900">
              Performance from High School
            </label>
            <div className="mt-2.5">
               <select
                  id="performance"
                  name="performance"
                  // value={formData.fav_sub0}
                  // onSelect={(e) => setForm({...formData, performance:e.target.value})}
                  onChange={(e) => setForm({...formData, performance:e.target.value})}
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="excellent">Excellent</option>
                  <option value="very good">Very Good</option>
                  <option value="good">Good</option>
                  <option value="average">Average</option>
                  <option value="bad">Bad (Fail)</option>
                </select>
            </div>
          </div>

          {/* dream_job */}
          <div>
            <label htmlFor="job1" className="block text-sm font-semibold leading-6 text-gray-900">
              Dream Job
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="job1"
                id="job1"
                value={formData.dream_job1}
                onChange={(e) => setForm({...formData, dream_job1:e.target.value})}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* 2_dream_job */}
          <div>
            <label htmlFor="job2" className="block text-sm font-semibold leading-6 text-gray-900">
              2nd Dream Job (optional)
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="job2"
                id="job2"
                value={formData.dream_job2}
                onChange={(e) => setForm({...formData, dream_job2:e.target.value})}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* country */}
          <div className="sm:col-span-2">
            <label htmlFor="country" className="block text-sm font-semibold leading-6 text-gray-900">
              Country
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={(e) => setForm({...formData, country:e.target.value})}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                disabled
                placeholder="Oh no, we don't need it 😂. Click the button below 👇"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          {/* Switch Button */}
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                fun&nbsp;policy
              </a>
              . hahaha 🤓. There's nothing there.
            </Switch.Label>
          </Switch.Group>
        </div>

        <div className="mt-10">
          
          {
            !processing ? 
              <button type='submit' className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Do the Magic.
              </button>

              :

              <button type="button" class="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled>
                <span class="flex items-center justify-center">
                  <span class="mr-4">
                    <div class="border-2 border-white border-solid h-4 w-4 animate-spin"></div>
                  </span>
                  Processing...
                </span>
              </button>
          }
        </div>
      </form>
      </div>

      {/* Results */}
      
      {
        suggestions 
        ?
          <div className="isolate bg-white px-6 py-20 sm:py-32 lg:px-8">
        
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Your Suggestions</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 pb-10">
              {/* blah */}
            </p>
            <p className='text-start mt-2 text-lg leading-8 text-gray-600 pb-10' dangerouslySetInnerHTML={{__html: suggestions.replace(/(\d+\.\s[^:]+:)/g, "<br><br><b>$1</b>")}}>
            </p>
          </div>
    
    
          </div> 
        : <></>
      }

      <div id="suggestions"></div>
      
    </div>
    
  )
}
