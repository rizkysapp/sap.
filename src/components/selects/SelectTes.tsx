import React, { useEffect, useState } from "react";
import * as Select from "@radix-ui/react-select";
import { SelTrigger, Dropdown, Wrapper, Viewport, Item } from "@/app/styles/select";
import Chevron from "@/app/styles/chevron";
import { HiCalendar } from "react-icons/hi";
import { HiEye } from "react-icons/hi2";

const items = [
  {
    id: "date",
    name: "Sort by date",
    icon: HiCalendar,
  },
  {
    id: "views",
    name: "Sort by views",
    icon: HiEye,
  },
];

const error = null;

const SelectMenu = () => {
  const [toggled, setToggled] = useState("closed");
  // const [options, setOptions] = useState();
  const [selected, setSelected] = useState(items);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <>
      <form style={{ width: "100%" }}>
        <Wrapper>
          <Select.Root
            dir="ltr"
            // open={true}
            defaultValue={`${items?.[0].name}`}
          >
            <Select.Trigger asChild data-state={toggled}>
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
