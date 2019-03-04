import React from "react"
import { navigate } from "gatsby-link"
import tachyons from 'tachyons-components'
import Layout from '../../components/Layout'

const Label = tachyons(`label`)`
db gray lh-copy f6
`

const Input = tachyons(`input`)`
pa2 input-reset ba b--moon-gray bg-transparent w-100 mb3
`

const Textarea = tachyons(`textarea`)`
pa2 input-reset ba b--moon-gray bg-transparent w-100 mb3
`

const Button = tachyons(`button`)`
link pointer br2 ph4 pv3 dib white bg-primary db w-100 w-auto-ns tc
`

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
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
    fetch("/", {
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
      <Layout>
        <div class="bt b--light-gray mt4 mb4"></div>
        <form
          name="contact"
          method="post"
          action="/contact/thanks/"
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
          <Label htmlFor={"name"} >Your name</Label>
          <Input type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} placeholder={"Your name"}/>

          <Label htmlFor={"email"}>Email</Label>
          <Input type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} placeholder={"Your email address"}/>

          <Label htmlFor={"message"}>Message</Label>
          <Textarea name={"message"} onChange={this.handleChange} rows={7} id={"message"} required={true} placeholder={"Write your message here"} />

          <Button type="submit">Send</Button>

        </form>
      </Layout>
    );
  }
}
