class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <table>
        <tbody>
          {this.props.imageData.map(image => 
            <ImageListRow onUpdate = {this.props.onUpdate} image={image}/>
          )}
        </tbody>
      </table>
    )
  }
};

window.ImageList = ImageList; 