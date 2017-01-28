var React = require('react');

var Todo = React.createClass({
    handleChange: function() {
        // just to rmeove the warning
    },
    render: function() {
        var {id, text, completed} = this.props;
        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed} onChange={this.handleChange} />
                {text}
            </div>
        );
    }
});

module.exports = Todo;