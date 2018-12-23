class UserComment extends React.Component {

    render() {
        console.log(this.props.comment);
        return (
            <a href={this.props.comment.comment_id} class="user_comment">
                <div class="user_comment_box">
                    <h4 class="title">{this.props.comment.comment}</h4>
                       <div class="user_comment_row">
                        <span>Score:</span>
                        <span class="user_comment_view">{this.props.comment.score}</span>
                    </div>
                    <div class="user_comment_row">
                        <span>Depth:</span>
                        <span class="user_comment_score">{this.props.comment.depth}</span>
                    </div>
                    <div class="user_comment_row">
                        Posted:
                        {' '}
                        {this.props.comment.time_ago === 'now' ? 'just now' : this.props.comment.time_ago + ' ago'}
                    </div>
                </div>
            </a>
        )
    }

}
