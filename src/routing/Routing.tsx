import { Route, Routes } from "react-router-dom";
import { ROUTES, SUB_ROUTES } from "./routes";
import { LandingPage } from "../pages/LandingPage";
import { SubmitFormPage } from "../pages/SubmitFormPage";
import { PresentPanelPage } from "../pages/Panel/PresentPanelPage";
import { HistoryPanelPage } from "../pages/Panel/HistoryPanelPage";
import { LoginPage } from "../pages/LoginPage";

export const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<LandingPage />} />
      <Route path={ROUTES.SUBMIT_FORM} element={<SubmitFormPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.PANEL}>
        <Route path={SUB_ROUTES.PRESENT} element={<PresentPanelPage />} />
        <Route path={SUB_ROUTES.HISTORY} element={<HistoryPanelPage />} />
      </Route>
    </Routes>
  );
};
