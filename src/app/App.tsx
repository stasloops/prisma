import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/pageLayout/PageLayout";
import { InventoryAsync } from "pages/inventory";
import { TasksAsync } from "pages/tasks";
import { Header } from "widgets/header";
import { MobileNavigation } from "widgets/mobile_navigation";
import { PackmanLoader } from "shared/ui/pacman_loader/PackmanLoader";
import { ConfrimPopup } from "shared/ui";
import { usePopupStore } from "shared/store/popup/popup";
import "./App.css";
import { SmartCaptcha } from "@yandex/smart-captcha";

function App() {
  const popupIsActive = usePopupStore((state) => state.popupIsActive);
  const [token, setToken] = useState("");

  console.log(token);

  return (
    <>
      <SmartCaptcha
        sitekey="ysc1_IMqDcyy1TvV9rWxhWKaFhdjpPfj1zhjrMRiVFcGK009607ec"
        onSuccess={setToken}
      />
      <Header />
      <PageLayout>
        <Suspense
          fallback={
            <div className=" flex justify-center items-center h-[60vh]">
              <PackmanLoader />
            </div>
          }
        >
          <Routes>
            <Route path="/tasks" element={<TasksAsync />} />
            <Route path="/inventory" element={<InventoryAsync />} />
          </Routes>
        </Suspense>
      </PageLayout>
      <MobileNavigation />
      {popupIsActive ? <ConfrimPopup /> : null}
    </>
  );
}

export default App;
