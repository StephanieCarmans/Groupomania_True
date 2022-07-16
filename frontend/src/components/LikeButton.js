import React from 'react';
import { BiHeart } from 'react-icons/bi';

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: true };
        this.handleClick = this.handleClick.bind(this);
    }
    //appel du bouton like/inlike avec unlike par défaut
    handleClick(event) {
        this.setState({ liked: !this.state.liked });
    }
    render() {
        let buttonText = this.state.liked ? 'Unlike' : 'Like';
        return (
            <button onClick={this.handleClick} className="like">
                <BiHeart />
                &nbsp;
                {buttonText}
            </button>
        );
    }
}
export default LikeButton;
