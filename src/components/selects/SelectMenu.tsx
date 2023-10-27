import React, { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { SelTrigger, Dropdown, Wrapper, Viewport, Item } from "@/app/styles/select";
import Chevron from "@/app/styles/chevron";
import { IconType } from "react-icons/lib";

export type item = {
  id: String;
  name: String;
  icon: IconType;
};

type SelectProps = {
  selected: item;
  setSelected: React.Dispatch<React.SetStateAction<item>>;
  items: item[];
};

const error = null;

const SelectMenu: React.FC<SelectProps> = ({ items, setSelected, selected }) => {
  const [toggled, setToggled] = useState("closed");

  return (
    <>
      <form style={{ width: "100%" }}>
        <Wrapper>
          <Select.Root
            dir="ltr"
            // open={true}
            defaultValue={`${selected.name}`}
            onOpenChange={(e) => setToggled(e == true ? "open" : "closed")}
            onValueChange={(e) => (e != selected.id ? setSelected : selected)}
          >
            <Select.Trigger asChild data-state={setSelected}>
              <SelTrigger error={!!error}>
                <span>
                  <Select.Value />
                </span>
                <Select.Icon asChild>
                  <Chevron direction="down" />
                </Select.Icon>
              </SelTrigger>
            </Select.Trigger>
            <Select.Content asChild>
              <Dropdown>
                <Viewport>
                  {items.map((item, i) => {
                    return (
                      <Item key={i} value={`${item.name}`}>
                        <Select.ItemText> {item.name} </Select.ItemText>
                        <Select.SelectIcon>
                          <item.icon />
                        </Select.SelectIcon>
                      </Item>
                    );
                  })}
                </Viewport>
              </Dropdown>
            </Select.Content>
          </Select.Root>
        </Wrapper>
      </form>
    </>
  );
};

export default SelectMenu;
