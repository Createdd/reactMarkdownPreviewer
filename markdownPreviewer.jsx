/* jshint node: true */
/*jshint esversion: 6 */
/*jshint esnext: true */
const initialText = (function defaultText() {
  return [
    '## Headings:\n## H2\n#### H4\n##### H5' +
    '\n\n## Text Decoration:\n' +
    '*italic*, \n**bold**, \n~~strikethrough~~, \n`inline code or monospace text`' +
    '\n\n## Images: ' +
    '\n\n![alt text](http://www.pixelstalk.net/wp-content/uploads/2016/10/Atom-Wallpaper-HD-768x432.jpg)' +
    '\n\n## HTML itself:\n\n' + '<kbd>[Github](https://github.com/DDCreationStudios) / [FreeCodeCamp](https://www.freecodecamp.com/ddcreationstudios) / [CodePen](http://codepen.io/ddcreationstudios/) / [LinkedIn](https://www.linkedin.com/in/daniel-deutsch-b95611127) / [Site](http://ddcreationstudios.at//) / [E-Mail](mailto:office@ddcreationstudios.at)</kbd>' +
    '\n\n## Code blocks:' +
    '\n```javascript\nfunction greeting() {\n  console.log(\'Code More!\');\n}\n\ngreeting();\n```' +
    '\n\n## Unordered lists:\n* item 1\n* item 2\n* item 3' +
    '\n\n## Ordered lists:\n1. item 1\n2. item 2\n3. item 3' +
    '\n\n## Hyperlinks: ' +
    '\n\n*[Codepen](http://codepen.io/ddcreationstudios/)*'
  ].join('\n');
})();//set the initial text as self-invoking function

class Markdown extends React.Component{
  constructor(){
    super();//call the super function to prepare the class for rendering
    this.state={txt:initialText};//set the state to the initialText
  }//constructor is called before it is mounted
  syncUpdate(input){
    this.setState({ txt: input.target.value })//set the key txt to the target value (the textarea)
  }//create an update function to set the state accordingly to the input
  render(){
    return(
      <div className="container">
        <div className="header">
          <h3>Markdown Previewer</h3>
          <h4>Written by Daniel Deutsch</h4>
          <h5>A Free Code Camp Challenge</h5>
          <hr/>
        </div>
        <div className="col-xs-6">
          <textarea className="textArea" onChange={this.syncUpdate.bind(this)}>
            {this.state.txt}
          </textarea>
        </div>
        <div className="col-xs-6"
          dangerouslySetInnerHTML={{__html: marked(this.state.txt)}}>
        </div>
      </div>
    );
  }//render the following jsx
}//create a react class called Markdown
ReactDOM.render(<Markdown />,document.getElementById('container'));//render the component markdown in the container node
