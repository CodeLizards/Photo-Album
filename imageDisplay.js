class ImageDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleChange() {
    console.log('changed!');
    this.props.updateRating(this.props.image.image, this.refs.rating.value)
    
    // this.props.image.rating = this.refs.rating.value;
    // this.render();
  }

  render() {
    return (
      <div className='col-2'>
        <img src={this.props.image.image} />
        <span>{this.props.image.name}</span>
        <select ref="rating" onChange={this.handleChange.bind(this)}>
          
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>

        </select>
        <span className="image-rating">{' ' +this.props.image.rating+' out of 5'}</span>
      </div>


    )
  }
}

window.ImageDisplay = ImageDisplay; 