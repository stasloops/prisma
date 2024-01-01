import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/pageLayout/PageLayout";
import { InventoryAsync } from "pages/inventory";
import { TasksAsync } from "pages/tasks";
import { Header } from "widgets/header";
import { MobileNavigation } from "widgets/mobile_navigation";
import "./App.css";
import { PackmanLoader } from "shared/ui/pacman_loader/PackmanLoader";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
