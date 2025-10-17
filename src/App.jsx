import React, { useMemo, useState } from "react";
import PhoneFrame from "./components/PhoneFrame.jsx";
import Dashboard from "./screens/DashBoard.jsx";
import LightingControl from "./screens/LightingControl.jsx";
import RoomScenarios from "./screens/RoomScenarios.jsx";
import Rooms from "./screens/Rooms.jsx";
import Conditioning from "./screens/conditioning.jsx";
import Security from "./screens/Security.jsx";
import Notifications from "./screens/Notifications.jsx";
import Options from "./screens/Options.jsx";
import AddDevice from "./screens/AddDevice.jsx";
import Account from "./screens/Account.jsx";
import ScenarioDetail from "./screens/ScenarioDetail.jsx";
import { NavContext } from "./lib/nav.jsx";

export default function App() {
  const [screen, setScreen] = useState("dashboard");
  const [params, setParams] = useState(null);

  const navigate = (name, p = null) => {
    setScreen(name);
    setParams(p);
  };

  const nav = useMemo(() => ({ screen, params, navigate }), [screen, params]);

  return (
    <div className="min-h-screen w-full bg-[#0b0b0b] px-4 py-6">
      <div className="mx-auto mb-6 max-w-7xl text-center">
        <h1 className="text-2xl font-semibold text-white/90">
          Smart Home Control — Interactive
        </h1>
        <p className="mt-2 text-sm text-white/60">
          Every button routes to its own screen
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl place-items-center">
        <NavContext.Provider value={nav}>
          <PhoneFrame>
            {screen === "dashboard" && <Dashboard />}
            {screen === "lighting" && <LightingControl />}
            {screen === "scenarios" && <RoomScenarios />}
            {screen === "rooms" && <Rooms />}
            {screen === "conditioning" && <Conditioning />}
            {screen === "security" && <Security />}
            {screen === "notifications" && <Notifications />}
            {screen === "options" && <Options />}
            {screen === "addDevice" && <AddDevice />}
            {screen === "account" && <Account />}
            {screen === "scenarioDetail" && <ScenarioDetail />}
          </PhoneFrame>
        </NavContext.Provider>
      </div>
    </div>
  );
}