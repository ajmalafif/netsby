import React from "react"
import { navigate } from "gatsby-link"
import tachyons from 'tachyons-components'

const Label = tachyons(`label`)`
db mid-gray lh-copy f6
`

const Input = tachyons(`input`)`
pa2 input-reset ba b--moon-gray bg-transparent w-100 mb3
`

const Textarea = tachyons(`textarea`)`
pa2 input-reset ba b--moon-gray bg-transparent w-100 mb3
`

const Button = tachyons(`button`)`
w-100 w-auto-ns link br2 ph4 pv3 dib mr3-ns white bg-primary tc bn pointer
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/about?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
        <div>
        <div className="bt b--light-gray mt4 mb4"></div>
        <h3 className="mb3">Contact me</h3>
        <form
          name="contact"
          method="post"
          action="/about/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={this.handleChange} />
            </label>
          </div>
          <Label htmlFor={"name"} >Name</Label>
          <Input type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} placeholder={"Your name"}/>

          <Label htmlFor={"email"}>Email</Label>
          <Input type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} placeholder={"Your email address"}/>

          <Label htmlFor={"message"}>Message</Label>
          <Textarea name={"message"} onChange={this.handleChange} rows={7} id={"message"} required={true} placeholder={"Write your message here"} />

          <Button type="submit">Send Message</Button>

        </form>
        </div>
    );
  }
}

export default Contact