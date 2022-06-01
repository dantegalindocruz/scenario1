import React from "react";
import EmailModal from "./EmailModal/EmailModal";
import { EmailModalProvider } from "./context/EmailModalProvider";

const App = () => {
  return (
    <EmailModalProvider>
      <>
        <header className="page-header">
          <div className="logo">
            Berry
            <div className="logo__sub">by Jenny</div>
          </div>
        </header>
        <main className="content-area">
          <h1>Content Area</h1>
        </main>
        <EmailModal />
        <div className="email-modal" />
      </>
    </EmailModalProvider>
  );
};

export default App;
