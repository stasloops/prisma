import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "shared/styles/style.variables";

const NAVIGATION_ITEMS = [
  { title: "Инвентарь", icon: "💼", path: "/inventory" },
  { title: "Квесты", icon: "✅", path: "/tasks" },
  { title: "Настройки", icon: "⚙️", path: "/settings" },
];

export const MobileNavigation = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("Квесты");

  const navigateByNav = (path: string, title: string) => {
    navigate(path);
    setActiveNav(title);
  };

  return (
    <div className="fixed bottom-0 z-50 w-full bg-primary_bg">
      <div className="flex">
        {NAVIGATION_ITEMS.map((item) => (
          <div
            onClick={() => navigateByNav(item.path, item.title)}
            style={{
              width: `${100 / NAVIGATION_ITEMS.length}%`,
              backgroundColor: activeNav === item.title ? theme.primary : "",
            }}
            className="py-2.5"
            key={item.title}
          >
            <span
              className="flex flex-col items-center transition-[1s]"
              style={{
                transform: `scale(${activeNav === item.title ? "1.2" : "1"})`,
              }}
            >
              <div>{item.icon}</div>
              <div>{item.title}</div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
