﻿#pragma strict

var zhead : GameObject;

function Start () {

}

function Update () {

if(zhead != null)
	if(Vector3.Distance(zhead.transform.position, transform.position) > 250)
		Destroy(this.gameObject);

}