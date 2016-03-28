class NewImage extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleChange() {
    console.log('changed!');
    this.props.updateRating(this.props.image.image, this.refs.rating.value)
    
    // this.props.image.rating = this.refs.rating.value;
    // this.render();
  }
}