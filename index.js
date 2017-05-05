const React = require('react/addons');

export default React.createClass({
	displayName: 'Ignore',
	shouldComponentUpdate() {
		return false;
	},
	
	render (){
		return React.Children.only(this.props.children);
	}
})
