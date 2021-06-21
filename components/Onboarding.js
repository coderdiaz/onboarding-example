import cn from "classnames"
import { useState } from "react"
import { ArrowRightIcon } from "@heroicons/react/outline"

function Onboarding({
    children,
    skipHandler,
    completeHandler,
    initialPage = 0,
}) {
  const [activeSlot, setActiveSlot] = useState(initialPage)
  const handleChange = (index) => setActiveSlot(index)

  // Validation for prevent errors in rendering
  if (children.length === 0) return null
  if ((children.length - 1) < initialPage) throw new Error(`The initialPage prop value ${initialPage} is out of range`)

  if (!skipHandler) skipHandler = () => {} // Added base function isn't provided
  if (!completeHandler) completeHandler = () => {} // Added base function isn't provided
  
  return <div className="flex">
    {children[activeSlot]}

    <div className="absolute w-full bottom-4 z-50">
      <ul className="flex space-x-2 justify-center items-center py-6">
        {children.map((_, i) => 
          <li
            className={
              cn("rounded-full bg-white bg-opacity-75 w-1.5 h-1.5 outline-none focus:outline-none", {
                "bg-opacity-100 px-2": activeSlot === i,
              })
            }
            key={i}
            aria-label={`Page ${i}`} />)}
      </ul>
      <div className="flex justify-between">
        { activeSlot !== children.length - 1 
          && <button
                onClick={skipHandler}
                className="px-4 py-3 text-white text-opacity-75 focus:outline-none">Skip</button>}
        { activeSlot < children.length - 1
          && <button
                onClick={() => handleChange(activeSlot + 1)}
                className="px-4 py-3 font-bold text-white focus:outline-none flex items-center space-x-2">
                  <span className="inline-block">Next</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button> }
        { activeSlot === children.length - 1
          && <button
                onClick={completeHandler}
                className="mx-4 px-4 py-3 font-bold bg-white w-full rounded-full focus:outline-none">Getting Started</button> }
      </div>
    </div>
  </div>
}

const Page = ({ className, children }) => {
  return <div className={cn("absolute z-10 w-auto min-w-full min-h-full max-w-none", className)}>
    {children}
  </div>
}

Onboarding.Page = Page
export default Onboarding
