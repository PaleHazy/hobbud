import { Router, Route } from "electron-router-dom";

import { MainScreen, AboutScreen, AnotherScreen } from "renderer/screens";
import Layout from "./layout/screen/Screen";
import { programs } from "shared/constants/programs";

export function AppRoutes() {
  return (
    <Router
      main={
        <>
          <Route path="/" element={<MainScreen />} />

          {programs.map((program) => (
            <Route
              key={program.id}
              path={program.path}
              element={
                <Layout>
                  <program.component />
                </Layout>
              }
            />
          ))}

          <Route path="/anotherScreen" element={<AnotherScreen />} />
        </>
      }
      about={<Route path="/" element={<AboutScreen />} />}
    />
  );
}
