
interface ToggleProps {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
}

const Toggle_Button = ({ toggle, setToggle }: ToggleProps) => {
  return (
    <div className="ml-4">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={toggle}
          onChange={() => setToggle(!toggle)}
          className="sr-only"
        />

        <div
  className={`
    w-8 h-4 rounded-full relative transition-all duration-300
    ${toggle ? "bg-violet-800" : "bg-zinc-300"}
  `}
>
  <div
    className={`
      absolute top-0.5 left-0.5
      w-3 h-3 rounded-full bg-white shadow-md
      transition-all duration-300
      ${toggle ? "translate-x-4" : "translate-x-0"}
    `}
  />
</div>
      </label>
    </div>
  );
};

export default Toggle_Button;