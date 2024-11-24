import "./App.css";
import React, {Fragment} from 'react';
import useJsonFetch from "./components/hooks"

export const GetData = ({url}) => {
  const [data, loading, error] = useJsonFetch(url);
  
  return (
    <div>
      {loading && <progress />}
      {error && <p>{error}</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
};

function App() {
  return (          
  <Fragment>
      <GetData url={`${import.meta.env.VITE_APP_NOTES_URL}/loading`}/>
      <GetData url={`${import.meta.env.VITE_APP_NOTES_URL}/data`} />
      <GetData url={`${import.meta.env.VITE_APP_NOTES_URL}/error`} />
    </Fragment>
  );
}

export default App;