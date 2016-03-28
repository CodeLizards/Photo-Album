class NewImage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleSubmit() {
    // console.log('values', this.refs.imageUrl.value);
    // console.log('values', this.refs.imageTitle.value);
    this.props.addImage(this.refs.imageUrl.value, this.refs.imageTitle.value);
    return false;

  }

  validateForm() {
        return false;
  }

  render() {
    return (
      <div className ='input-image'>
        <form>
        
        <div>
          <label>
          Image Url:
          </label>
          <input ref='imageUrl'>
          </input>
        </div>
        
        <div>
          <label>
            Image Title:
          </label>
          <input ref='imageTitle'>
          </input>
        </div>

        </form>

        <button onClick={this.handleSubmit.bind(this)}>Post Image</button>

      </div>

    )
  }
};

window.NewImage = NewImage;