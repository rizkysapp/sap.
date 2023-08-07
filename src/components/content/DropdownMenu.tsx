import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconType } from "react-icons/lib";
import { BiMenu, BiVerticalCenter } from "react-icons/bi";
import { BsMenuDown, BsViewList } from "react-icons/bs";

export type ListOption = {
  id: String;
  name: String;
  icon: React.ReactNode;
};

interface Props {
  selected?: ListOption;
  setSelected?: React.Dispatch<React.SetStateAction<ListOption>>;
  options?: [];
}

const Dropdown: React.FC<Props> = ({ selected, setSelected, options }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        value={`${selected}`}
        onChange={() => setSelected}
        asChild
        className="
            px-2 
            py-1 
            border 
            border-gray-950 
            rounded-md 
            shadow-md 
            hover:shadow-lg 
            w-32 
            outline-none 
            scale-100 
            transform-gpu 
            hover:scale-[1.03] 
            active:scale-[0.97] 
            transition duration-100
          "
      >
        <button className="flex-between">
          <div className="flex-center gap-1">
            {selected?.icon}
            <h1>{selected?.name}</h1>
          </div>
          <BsMenuDown />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="
              bg-white 
              rounded-md 
              shadow-lg 
              border 
              border-gray-950 
              mt-1 
              w-32
            "
        >
          <DropdownMenu.Item
            className="
                outline-none 
                p-2 
                bg-gray-600 
                text-white 
                flex-between 
                gap-2
              "
          >
            <h1>testing 1</h1>
            <BiVerticalCenter />
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="
                outline-none 
                hover:bg-neutral-100 
                p-2 
                rounded-b-md
              "
          >
            <h1>testing 2</h1>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
