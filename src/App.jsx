import Weather from "./component/weather"
function App() {
  return (
    <>
      <h1 style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }} class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Weather App</span></h1>
      <Weather />
    </>
  )
}
export default App