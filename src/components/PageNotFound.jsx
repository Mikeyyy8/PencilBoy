import { Link } from "react-router-dom";


const PageNotFound = () => {
  
  return (
    <div className="tracking-tight h-96 mt-10 dark:text-neutral-400 text-neutral-900 text-center">
      <div className="space-y-6">
        <h1 className="text-6xl">Page 404</h1>
        <p>The page you requested could not be found</p>
        <div>
          <Link to={"/"} className="text-white bg-neutral-800 hover:bg-neutral-600 hover:scale-95 transition p-2 rounded-md">
            Back to home 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
