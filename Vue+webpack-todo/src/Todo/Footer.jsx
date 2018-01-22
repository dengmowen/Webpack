import '../assets/style/footer.styl';

export default {
  data () {
    return {
      author: 'Awen'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Written by {this.author}</span>
      </div>
    )
  }
};