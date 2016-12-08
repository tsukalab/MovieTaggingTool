'use strict';
const ServerActionCreator = require('../actions/ServerActionCreator');

const $ = require('jquery');
let _accessToken = null,
    _client = null,
    _uid = null;

const DEVELOPMENT = true;

function setHeader(){
  localStorage.setItem("header", JSON.stringify({
    "Client"        : _client,
    "Uid"           : _uid,
    "AccessToken"  : _accessToken
  }));
}

function clearHeader(){
  localStorage.removeItem('header');
  localStorage.removeItem("currentUserInfo");
}

function loadHeader(){
  let header = localStorage.getItem("header");

  if( header == null || !DEVELOPMENT){
    return null;
  }

  try{
    header = JSON.parse(header);
    _client = header.Client;
    _uid = header.Uid;
    _accessToken = header.AccessToken;
    setTimeout(function(){
      ServerActionCreator.signIn(_uid);
    }, 0);
    return header;
  } catch(e){
    throw new Error("ERROR. JSON.parse failed");
  }
}

function genHeader(){
  loadHeader();
  if( _client == null || _uid == null || _accessToken == null){
    return {};
  }

  return {
    "Client"        : _client,
    "Uid"           : _uid,
    "Access-Token"  : _accessToken
  };
}

const WebAPIUtils = {

isSigningIn : function(){
    const url = window.location.href;
    if(url.includes("uid") && url.includes("client_id") && url.includes("auth_token")){
      const token = url.match(/auth_token=([a-zA-Z0-9\-]*)/)[1];
      const uid = url.match(/uid=([a-zA-Z0-9\-]*)/)[1];
      const client_id = url.match(/client_id=([a-zA-Z0-9\-]*)/)[1];
      WebAPIUtils.signedIn(token, uid, client_id);
      window.location.href = window.location.href.split("/")[0] + "/#manager";
    }
    return !!loadHeader();
},

signIn : function(){
    const host = window.location.origin;
    window.location.href ="http://preview.fabnavi.org"+`/auth/github?auth_origin_url=${host}`;
  },

  signedIn : function(token, uid, client){
    _accessToken = token;
    _uid = uid;
    _client = client;
    setHeader();
  },

  signOut : function(){
    clearHeader();
    window.location.reload();
    setTimeout(function(){
      ServerActionCreator.signOut();
    }, 0);
  }
};

global.api = WebAPIUtils;
module.exports = WebAPIUtils;
