class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <table className='col-1'>
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