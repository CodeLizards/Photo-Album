class ImageListRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleClick() {
    this.props.onUpdate(this.props.image);
  }

  // Currently, the image being displayed is hardcoded from tinyurl.com 
  render() {
    return (
      <tr onClick={this.handleClick.bind(this)}>
        <td className="image-name">{this.props.image.title}</td>
      </tr>
    )
  }
}

window.ImageListRow = ImageListRow; 