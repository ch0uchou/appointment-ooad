import { Calendar, Whisper, Popover, Badge } from "rsuite";
import React, { useState } from "react";
import {
  Form,
  Button,
  ButtonToolbar,
  RadioGroup,
  Radio,
  Checkbox,
  CheckboxGroup,
  Slider,
  DatePicker,
  DateRangePicker,
  CheckPicker,
  SelectPicker,
  TagPicker,
  InputPicker,
  Cascader,
  MultiCascader,
  Rate,
  Uploader,
  Panel, 
  Container,
  Content,
  FlexboxGrid,
  Sidebar,
} from "rsuite";

function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: "10:30 am", title: "Meeting" },
        { time: "12:00 pm", title: "Lunch" },
      ];
    case 15:
      return [
        { time: "09:30 pm", title: "Products Introduction Meeting" },
        { time: "12:30 pm", title: "Client entertaining" },
        { time: "02:00 pm", title: "Product design discussion" },
        { time: "05:00 pm", title: "Product test and acceptance" },
        { time: "06:30 pm", title: "Reporting" },
        { time: "10:00 pm", title: "Going home to walk the dog" },
      ];
    default:
      return [];
  }
}

export default function Home() {
  const [open, setOpen] = useState(true);
  const [openAppointment, setOpenAppointment] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [Guests, setGuests] = useState([]);
  const data = [username.toString(),'Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
    item => ({ label: item, value: item })
  );
  const [selectedDate, setSelectedDate] = useState(new Date());

  function renderCell(date) {
    const list = getTodoList(date);
    const displayList = list.filter((item, index) => index < 2);

    if (list.length) {
      const moreItem = (
        <li>
          <Whisper
            placement="top"
            trigger="click"
            speaker={
              <Popover>
                {list.map((item, index) => (
                  <p key={index}>
                    <b>{item.time}</b> - {item.title}
                  </p>
                ))}
              </Popover>
            }
          >
            <a>show</a>
          </Whisper>
        </li>
      );

      return (
        <ul className="calendar-todo-list">
          {displayList.map((item, index) => (
            <li key={index}>
              <Badge /> <b>{item.time}</b> - {item.title}
            </li>
          ))}
          {moreItem}
        </ul>
      );
    }

    return null;
  }

  function login() {
    console.log(username, password);
    setOpen(false);
  }

  function handleAppointment(date) {
    setOpenAppointment(true);
    setSelectedDate(date);
  }

  function addAppointment() {
    setOpenAppointment(false);
  }

  return (
    <Container>
      {!openAppointment ? (
        <Content>
          {open ? (
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<div>Login</div>} bordered>
                  <Form
                    fluid
                    onChange={(e) => {
                      setUsername(e.username);
                      setPassword(e.password);
                    }}
                  >
                    <Form.Group>
                      <Form.ControlLabel>
                        Username or email address
                      </Form.ControlLabel>
                      <Form.Control name="username" />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Password</Form.ControlLabel>
                      <Form.Control
                        name="password"
                        type="password"
                        autoComplete="off"
                      />
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button appearance="primary" onClick={() => login()}>
                          Sign in
                        </Button>
                      </ButtonToolbar>
                    </Form.Group>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          ) : (
            <Calendar
              bordered
              renderCell={renderCell}
              onSelect={(date) => handleAppointment(date)}
            />
          )}
        </Content>
      ) : (
        <>
          <Sidebar>
            <Calendar
              bordered
              compact={true}
              defaultValue={selectedDate}
              onSelect={(date) => handleAppointment(date)}
            />
          </Sidebar>
          <Content>
            <Panel header={<div>Make Appointment</div>} bordered>
              <Form
                onChange={(e) => {
                  setTitle(e.title);
                  setLocation(e.location);
                  setDescription(e.description);
                  setSelectedDate(e.datePicker);
                  setStartTime(e.startTime);
                  setEndTime(e.endTime);
                  setGuests(e.guests);
                }}
              >
                <Form.Group>
                  <Form.ControlLabel>
                    Add tile for your appointment
                  </Form.ControlLabel>
                  <Form.Control name="title" />
                  <Form.HelpText tooltip>This field is required</Form.HelpText>
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Date:</Form.ControlLabel>
                  <Form.Control name="datePicker" accepter={DatePicker} defaultValue={selectedDate} format="yyyy-MM-dd" editable={false} />
                  <Form.HelpText tooltip>This field is required</Form.HelpText>
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Start Time:</Form.ControlLabel>
                  <Form.Control name="startTime" accepter={DatePicker} defaultValue={new Date()} format="HH:mm" editable={false} />
                  <Form.HelpText tooltip>This field is required</Form.HelpText>
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>End Time:</Form.ControlLabel>
                  <Form.Control name="endTime" accepter={DatePicker} defaultValue={new Date(new Date().getTime() + 30 * 60000)} format="HH:mm" editable={false} />
                  <Form.HelpText tooltip>This field is required</Form.HelpText>
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Location</Form.ControlLabel>
                  <Form.Control
                    name="location"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.ControlLabel>Description</Form.ControlLabel>
                  <Form.Control
                    name="description"
                  />
                </Form.Group>
                <Form.Group >
                  <Form.ControlLabel>Guests:</Form.ControlLabel>
                  <Form.Control name="guests" accepter={TagPicker} data={data} defaultValue={[username]} disabledItemValues={[username]}/>
                </Form.Group>
                <Form.Group>
                  <ButtonToolbar>
                    <Button
                      appearance="primary"
                      onClick={() => addAppointment()}
                    >
                      Add Appointment
                    </Button>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Panel>
          </Content>
        </>
      )}
    </Container>
  );
}
