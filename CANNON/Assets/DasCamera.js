#pragma strict
/*
	TODO:
		IF the floor AND the head CAN be visible, then both should be


		Also, the camera's field view should never descend below the floor
*/

var target:Transform;
var maxSize : float;
var offSet : Vector3;
var cannonFodder : CannonControl;

function Start () {

}

function Reset()
{
	transform.position = offSet + target.position;
}

function VlerpNoClamp(start:Vector3,end:Vector3,t:float) : Vector3
{
	return start + (end - start) * t;
}


function DesiredPosition(start:Vector3, end:Vector3, dist:float) : Vector3
{
	return (end-start).normalized * dist;
}


function Update ()
{
	target = cannonFodder.currentHead.transform;
	//var angle = 2*Mathf.Atan(Mathf.Tan(Mathf.Deg2Rad*camera.fieldOfView/2) / camera.aspect);

	//This is the current camera controls where it zooms out and shizz

	/*transform.position.x = target.position.x + 14.5 + target.rigidbody.velocity.x*.1f;
	transform.position.y = (target.position.y)/2+10;
	camera.orthographicSize = transform.position.y+0.5f;
	if(camera.orthographicSize > maxSize)
	{
		camera.orthographicSize = maxSize;
		transform.position.y = target.position.y;
	}*/
	
	
	/*
	transform.position.y = (target.position.y + -1)/2;
	
	camera.orthographicSize = transform.position.y;*/
	//transform.position.z = -transform.position.y / Mathf.Tan(angle/2);

	
	///////////TESTING
	
	//var 
		
			
				
		
	//var hPre = Mathf.Deg2Rad(camera.fieldOfView)/2;
	//var angle = 2*Mathf.Atan(Mathf.Tan() / camera.aspect);
	//print(angle);
	
	//aspect 16/9
	//hFov = 60
	//vFov = 
	//print(Mathf.Rad2Deg(2*Mathf.Atan(Mathf.Tan(Mathf.Deg2Rad(camera.fieldOfView)/2)*camera.aspect)));		
				
/*
		var vFOV = Mathf.Atan(Mathf.Tan(camera.fieldOfView/2)*camera.aspect);
		transform.position.x = target.position.x;
		transform.position.y = Mathf.Abs(target.position.y + 1)/2;
		transform.position.z = (transform.position.y / Mathf.Tan(vFOV/2));
		//print(transform.position.y);
		//print(transform.position.z);
		/*transform.position = offSet.normalized * (target.rigidbody.velocity.x+10) + target.position;
		
		transform.position.x += target.rigidbody.velocity.x * .85;
		//Mathf.Lerp(transform.position.x,transform.position.x - target.rigidbody.velocity.x,Time.deltaTime
		
		//transform.Rotate();
		//transform.rotation.eulerAngles = Vector3(0,Mathf.Clamp(target.rigidbody.velocity.x,0,2),0);
		
		camera.WorldToViewportPoint(Vector3(transform.position.x,-1,0)).y;
		*/
		/*if( 0 <= y <= 1)
			{
				Mathf.Clamp();
			}
		*/
		/*if(transform.position.y < 3.89)
		{
			transform.position.y = 3.89;
			transform.position.z = -10;
		}*/
	
	var targetSpeed : float = target.rigidbody.velocity.magnitude;
	
	if(target.position.x > -5)
		transform.position.x = target.position.x + 10;
	else
		transform.position.x = target.position.x + 10;
	if(target.position.y > 10 && target.position.y < 100)
		transform.position.y = target.position.y - 2.5;
	else if(target.position.y > 100)
		transform.position.y = 100;
	else
		transform.position.y = 7.262981;
	
	//if(targetSpeed > 100)
		//transform.position.z = targetSpeed + -10.97274;


/*
	continually update our current position by Vlerping between
	current position and DesiredPosition
*/
/*

		
		*/
}

/*
	Floor should always be visible, if possible
	and we should never see below the floor
*/