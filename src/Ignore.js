import React, { Component } from 'react';

export default class Ignore extends Component {
	
	shouldComponentUpdate() {
		return false;
	}
	
	render (){
		return ;
	}
}
