import { useToast } from "@hw-rui/Toast";
import { Button, Select } from "./components";
import Accordion from "./components/Accordion";
import AccordionRegion from "./components/Accordion/AccordionRegion";
import AccordionTrigger from "./components/Accordion/AccordionTrigger";
import Popover from "./components/Popover";
import "./theme/default.css";
import { useState } from "react";

const Divider = () => {
  return <div style={{ margin: "20px 0px", width: "100%" }} />;
};

function App() {
  const { toast } = useToast();
  const [selectValue, setSelectValue] = useState<string>("2");
  const handleClickOpenToast = () => {
    toast({ title: "This is Toast Title", description: "Hey~ How are you~~?" });
  };
  const handleChangeSelectValue = (value: string) => {
    setSelectValue(value);
  };
  return (
    <>
      <h3>Button</h3>
      <Button className={"custom"} size="lg">
        a
      </Button>
      <Divider />
      <h3>Accordion</h3>
      <Accordion>
        <Accordion.Trigger id={"1"}>a</Accordion.Trigger>
        <Accordion.Region id={"1"}>a-content</Accordion.Region>
        <Accordion.Trigger id={"2"}>b</Accordion.Trigger>
        <Accordion.Region id={"2"}>b-content</Accordion.Region>
      </Accordion>
      <Divider />
      <h3>Popover</h3>
      <div style={{ textAlign: "center" }}>
        <Popover position="bottom-left">
          <Popover.Trigger></Popover.Trigger>
          <Popover.Content>Content</Popover.Content>
        </Popover>
      </div>
      <Divider />
      <h3>Select Uncontrolled</h3>
      <div style={{ textAlign: "center" }}>
        <Select>
          <Select.Trigger>
            <Select.SelectedValue />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value={"1"}>select-item-1</Select.Item>
            <Select.Item value={"2"}>select-item-21212</Select.Item>
            <Select.Item value={"3"}>select-item-3</Select.Item>
          </Select.Content>
        </Select>
      </div>
      <h3>Select Controlled</h3>
      <div style={{ textAlign: "center" }}>
        <Select onChange={handleChangeSelectValue} value={selectValue}>
          <Select.Trigger>
            <Select.SelectedValue />
          </Select.Trigger>
          <Select.Content>
            <Select.Item value={"1"}>select-item-1</Select.Item>
            <Select.Item value={"2"}>select-item-21212</Select.Item>
            <Select.Item value={"3"}>select-item-3</Select.Item>
          </Select.Content>
        </Select>
      </div>
      <Divider />
      <h3>Toast</h3>
      <div>
        <button onClick={handleClickOpenToast} style={{ marginTop: "20px" }}>
          Open Toast
        </button>
      </div>
    </>
  );
}

export default App;
