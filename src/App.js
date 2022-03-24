import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchForm from "./components/Form/SearchForm";
import JobCardList from "./components/JobCardList";
import JobDescription from "./components/JobDescription";
import JobFilter from "./components/JobFilter";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { JobContextProvider } from "./context/JobContext";

function App() {
  return (
    <JobContextProvider>
      <Router basename="/remote-jobs">
        {/* HEADER */}
        <Header />

        {/* SEARCH FORM */}
        <SearchForm />

        <main>
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <JobFilter />
                    <JobCardList />
                  </>
                }
              />
              <Route path="/:jobDetailUrl" element={<JobDescription />} />
            </Routes>
          </div>
        </main>

        {/* FOOTER */}
        <Footer />
      </Router>
    </JobContextProvider>
  );
}

export default App;
