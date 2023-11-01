import React, { useEffect, useState } from "react";
import * as Select from "@radix-ui/react-select";
import { SelTrigger, Dropdown, Wrapper, Viewport, Item } from "@/app/styles/select";
import Chevron from "@/app/styles/chevron";
import { IconType } from "react-icons/lib";

export interface item {
  id: String;
  name: String;
  icon: IconType;
}

interface Props {
  items: item[];
  value: String;
  onChange(value: string): void;
  name: String;
  defaultValue: String;
}

const error = null;

const SelectMenu: React.FC<Props> = ({ items, value, onChange, name, defaultValue }) => {
  const [currentItem, setCurrentItem] = useState<item | undefined>(undefined);
  const [availableList, setAvailableList] = useState<item[]>([]);
  const [opened, onOpenChange] = useState<boolean>(false);

  const onValueChange = (value: string) => {
    if (items) {
      const matchingValue = items.find((element) => element.id == value);
      if (matchingValue) {
        setCurrentItem({ ...matchingValue });
        setAvailableList(items.filter((i) => i.id != matchingValue.id));
        onChange && onChange(value);
      }
    }
  };

  useEffect(() => {
    if (defaultValue) {
      console.log(items, "items");
      const newValue = items.find((i) => i.id === defaultValue);
      console.log(defaultValue, "defaultValue");
      if (!newValue) {
        console.error("can not find new value");
      }
      setCurrentItem(newValue);
      console.log(newValue, "new value");

      setAvailableList(items.filter((i) => i.id != defaultValue));
    }
  }, [defaultValue, items]);

  useEffect(() => {
    setAvailableList(items);
    setCurrentItem(undefined);
  }, [items]);

  return (
    <>
      <form style={{ width: "100%" }}>
        <Wrapper>
          <Select.Root
            dir="ltr"
            // open={true}
            defaultValue={`${defaultValue}`}
            onOpenChange={onOpenChange}
            onValueChange={onValueChange}
            name={`${name}`}
            value={`${value}`}
          >
            <Select.Trigger asChild data-state={onOpenChange}>
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
                  {availableList.map((item, i) => {
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
