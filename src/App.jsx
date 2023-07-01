import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import useTheme from "./hooks/useTheme";
import { THEME_VALUES } from "./constants";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={`w-full min-h-screen flex flex-col gap-5 py-[2rem] px-[1rem] md:px-[4rem] lg:px-[10rem] xl:px-[20rem]
      ${theme === THEME_VALUES.light ? "bg-white text-neutral-900" : "bg-[#242424] text-white"}`}>
      <Header />
      <main>
        <SearchForm />
        <Results />
      </main>
    </div>
  );
}