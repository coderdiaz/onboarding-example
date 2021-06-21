const PageLayout = ({ children }) => {
  return <div className="bg-gray-100 absolute w-full h-full">
    <header className="px-5 py-3 w-full bg-white shadow-md flex">
      <span className="font-bold">Dashboard</span>
    </header>
    <main className="px-5 py-3">
      {children}
    </main>
    <footer />
  </div>
}

export default PageLayout
