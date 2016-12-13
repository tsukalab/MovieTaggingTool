import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

import Navigation from './Navigation.react';
import Frame from './Frame.react.js';
import ProjectManager from './ProjectManager.react';
import WebAPIUtils from '../utils/WebAPIUtils';
import ServerActionCreator from '../actions/ServerActionCreator';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router';

const transit = React.createClass({
	render : function(){return null}
});

const routes = (
	<Router history={hashHistory}>
	<Route components={Frame} path="/">
	<IndexRoute component={ProjectManager} />
	<Redirect from="/" to="manager" />
	<Route components={ProjectManager} path="manager" >
	</Route>
	</Route>
	</Router>
	);

	//ProjectStoreのinitと, 上で定義されたroutesを基に, Reactをdocument.body以下に展開する
	global.onload = function ( ){
		render(routes, document.querySelector("#mount-point"));
		if(WebAPIUtils.isSigningIn()){
			const uid = WebAPIUtils.isSigningIn.uid;
			ServerActionCreator.signIn(uid);
		}
	}
