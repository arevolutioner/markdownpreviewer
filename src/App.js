import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import marked from 'marked';

const initialState = `

Marked - Markdown Parser
========================

[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left.
2. See the live updates on the right.

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/

# Heading
## heading2 

- list item 1
- list item 2
- list item 3

\`\`\`
function test() {
  console.log("notice the blank line before this function?");
}
\`\`\`

Heres some code, \`<div></div>\`, between 2 backticks.
![Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)

`;



class App extends React.Component {
  state = {
      text: initialState
    }
  
  
  

  handleChange = (event) => {
    this.setState({
      text: event.target.value 
    })
  }

  render() {
    const { text } = this.state;

    const markdown = marked(text, {breaks:true});

    return(
      <div>
        <h1 className = "text-center mt-4 text-white">Convert your text
</h1>
        <div className = "row">
          <div className="col-6">
            <h6 className = "text-white text-center"> Enter your text
     </h6>
            <textarea className="form-control p-2" id="editor" value={text
    } onChange={this.handleChange}/>
          </div>
          <div className="col-6">
            <h6 className = "text-center text-white"> See the result: </h6>
            <div className = "preview rounded p-2" dangerouslySetInnerHTML = {{__html: markdown}} id="preview"/>  
          </div>
        </div>
      </div>

    );
  }
}

export default App;
