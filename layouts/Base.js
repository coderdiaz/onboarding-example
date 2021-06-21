const Base = ({ children }) => {
  return <div className="bg-gray-900 h-screen w-screen flex justify-center">
    <div className="relative mx-auto my-auto w-80 min-h-140 bg-gray-50 rounded-xl overflow-hidden">
      {children}
    </div>
  </div>
}

export default Base
