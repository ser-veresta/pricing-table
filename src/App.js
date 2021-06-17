import { useState } from "react";
import "./App.css";
import { Card } from "./card";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [scheme, setscheme] = useState([
    {
      title: "FREE",
      price: 0,
      user: "single",
      storage: 5,
      unlimitedPublicProject: true,
      communityAccess: true,
      unlimitedPrivateProject: false,
      dedicatedPhoneSupport: false,
      freeSubdomain: [false, ""],
      monthlyStatusReports: false,
    },
    {
      title: "PLUS",
      price: 9,
      user: "5",
      storage: 50,
      unlimitedPublicProject: true,
      communityAccess: true,
      unlimitedPrivateProject: true,
      dedicatedPhoneSupport: true,
      freeSubdomain: [true, "1 Free"],
      monthlyStatusReports: false,
    },
    {
      title: "PRO",
      price: 49,
      user: "Unlimited",
      storage: 150,
      unlimitedPublicProject: true,
      communityAccess: true,
      unlimitedPrivateProject: true,
      dedicatedPhoneSupport: true,
      freeSubdomain: [true, "Unlimited"],
      monthlyStatusReports: true,
    },
  ]);

  return (
    <div className="App">
      {scheme.map((item) => (
        <Card scheme={item} />
      ))}
    </div>
  );
}

export default App;
