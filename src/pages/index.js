import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NotesIcon from '../assets/feather.svg';
import '../styles/index.css';
import { Link } from 'gatsby';

const Notes = () => (
  <Layout>
    <SEO title="Crosa Apps | The smart and simple apps you deserve" />

    <div className="text-center p-16 text-4xl header">
      Crosa Apps Inc.
    </div>

    <div className="mt-20 mx-auto w-3/5 text-center text-6xl">
      We deliver the smart and simple apps you deserve!
    </div>

    <div className=" mt-20">
      {/* <div className="text-center p-16 text-4xl header">
        We created
      </div> */}

      <div className="mt-20 mx-auto w-3/5 p-10 text-center">
        <div className="flex justify-center items-center">
          <div className="w-1/4">
            <Link to="/notes">
              <NotesIcon className="w-20 inline" />
              <div className="mt-6">Crosa Notes</div>
            </Link>
          </div>
          {/* <div className="w-1/4">
            <MuzeIcon className="w-20 inline" />
            <div className="mt-6">Crosa Player (Muze)</div>
          </div>
          <div className="w-1/4">
            <NotesIcon className="w-20 inline" />
            <div className="mt-6">Crosa Notes</div>
          </div> */}
        </div>
      </div>
    </div>

  </Layout>
);

export default Notes;
