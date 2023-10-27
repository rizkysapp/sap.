import { styled } from "@stitches/react";
import * as Select from "@radix-ui/react-select";

const Wrapper = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
});

const SelTrigger = styled("button", {
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
  width: "100%",
  boxSizing: "border-box",
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 4,
  paddingBottom: 4,
  fontSize: 16,
  fontFamily: "sans-serif",
  border: "1px solid #1b1b1b",
  borderRadius: 6,
  outline: "none",
  color: "#0F0F0F",
  variants: {
    error: {
      true: {
        borderColor: "#df6c75",
      },
    },
  },
});

const Dropdown = styled("div", {
  position: "relative",
  boxSizing: "border-box",
  background: "White",
  color: "#0F0F0F",
  padding: "14px 8px",
  fontFamily: "sans-serif",
  fontSize: 16,
  border: "1px solid #1b1b1b",
  borderRadius: 6,
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  pointerEvents: "all",
});

const Viewport = styled(Select.Viewport, {
  display: "flex",
  flexDirection: "column",
  rowGap: 2,
});

const Item = styled(Select.Item, {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 10,
  padding: "8px",
  outline: "none",
  transition: "background ease 300ms",
  borderRadius: 6,
  "&:focus": {
    background: "#35363a",
    color: "White",
  },
});

export { Dropdown, SelTrigger, Wrapper, Viewport, Item };
