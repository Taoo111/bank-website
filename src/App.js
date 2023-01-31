import React from "react";
import "./App.css";
import styles from "./styles";

import {
  Billing,
  Button,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Stats,
  Testimonials,
  Navbar,
  FeedbackCard,
  GetStarted,
} from "./components/indexExport";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}><Hero /></div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
          {/* Stats Bussines Billing CardDeal Testimonials Clients Cta Footer */}
        </div>
      </div>
    </div>
  );
};

export default App;
