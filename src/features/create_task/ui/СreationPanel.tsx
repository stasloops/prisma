import React, { useState } from "react";
import { Input } from "shared/ui/Input/Input";

export const СreationPanel = () => {
  const [title, setTitle] = useState<string>("");

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className="mt-4">
      <div className="mb-3">
        <div className="mb-2">Название </div>
        <Input
          placeholder="Победить дракона"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="mb-3">
        <div className="mb-2">Сложность </div>
        <Input value={title} onChange={handleTitle} />
      </div>
      <div className="mb-3">
        <div className="mb-2">Награда </div>
        <Input value={title} onChange={handleTitle} />
      </div>
      <div className="mb-3">
        <div className="mb-2">Описание </div>
        <Input value={title} onChange={handleTitle} />
      </div>
      <div className="mt-10 bg">Создать</div>
    </div>
  );
};
