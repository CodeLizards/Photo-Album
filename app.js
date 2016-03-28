//app.js

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: this.props.imageData[0],
      ratingChanged: false,
      newImage: false,
    }
  }

  onUpdate(image) {
    this.setState({
      currentImage: image
    })
  }

  updateRating(image, rating){
    console.log('updating rating');
    for(var i = 0; i < this.props.imageData.length; i++){
      if(this.props.imageData[i].image === image){
        this.props.imageData[i].rating = rating;
      }
    }
    this.setState({
      ratingChanged: true,
    })
  }

  addImage(url, title){
    this.props.imageData.push({'title': title, 'image': url, 'rating': 0});
    this.setState({
      newImage: false,
    })
  }


  render(){
    return (
      <div>
        <NewImage addImage={this.addImage.bind(this)}/>
        <ImageList onUpdate={this.onUpdate.bind(this)} rating= {this.state.rating} imageData={this.props.imageData}/>
        <ImageDisplay updateRating={this.updateRating.bind(this)} image={this.state.currentImage}/>
      </div>
    )
  }
};




ReactDOM.render(<App imageData={window.imageData}/>, document.getElementById('app'));




