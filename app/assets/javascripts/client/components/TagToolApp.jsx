import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';

import Navigation from './Navigation';
import Frame from './Frame';
import ProjectManager from './ProjectManager';
import EditProject from './EditProject';

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
        <Route components={EditProject} path="edit">
        </Route>
	</Route>
	</Router>
	);

	global.onload = function ( ){
		render(routes, document.querySelector("#mount-point"));
		if(WebAPIUtils.isSigningIn()){
			const uid = WebAPIUtils.isSigningIn.uid;
			ServerActionCreator.signIn(uid);
		}
	}
