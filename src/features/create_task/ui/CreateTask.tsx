import { useCollaps } from "shared/hooks";
import { ToggleButton } from "./ToggleButton";
import { СreationPanel } from "./СreationPanel";

export const CreateTask = () => {
  const {
    toggle,
    isOpen,
    preview_ref,
    additional_ref,
    collaps_styles,
    additional_styles,
    preview_styles,
  } = useCollaps();

  return (
    <div style={{ ...collaps_styles }}>
      <div ref={preview_ref} style={{ ...preview_styles }}>
        <ToggleButton toggle={toggle} isActive={isOpen} />
      </div>
      <div
        style={{ ...additional_styles }}
        ref={additional_ref}
        className="px-4 pt-4 rounded-xl"
      >
        <СreationPanel toggle={toggle}/>
      </div>
    </div>
  );
};
