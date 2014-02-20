#pragma strict

var head:GameObject;
var currentHead:GameObject;


var minAngle = 20.0f;
var maxAngle = 70.0f;

var powerMax = 2.0f;
var powerMin = 0.0f;

var basePower = 200;
var powerFactor = 600;
var aimSpeed = 3;
var powerSpeed = 5;

var powerbar:GameObject;
var roomBarrier:RoomBarrier;

var cameraController : DasCamera;

private var dir = 1f;
private var stop = false;
private var powerSet = false;
private var powerOfPower = Vector3.zero;



function Start () 
{ 

	powerbar.SetActive(false);
	currentHead = this.gameObject;
}


function Update ()
{

	if(Input.GetKeyDown("r") && currentHead != null)
			Reset();
	
	
	if(powerbar.active == true && powerSet == false)
		{
			
			
			var t = powerbar.transform.position.y;//localScale.y;
			//print(t);
			
			
			
			if(t < powerMin && dir == -1 || t > powerMax && dir == 1)
			{
				//print("HIT");
				dir = -dir;
			}
			
			//powerbar.transform.localScale.y += Time.deltaTime * dir;
			powerbar.transform.position.y += Time.deltaTime * dir * powerSpeed;
			
			powerOfPower = ((powerbar.transform.position.y) * powerFactor + basePower) * rigidbody.transform.up;
		
			
			
			
			if(Input.GetButtonDown("Jump"))
				{
					powerSet = true;
					//print(powerOfPower);
					currentHead  = Instantiate(head,transform.position,Quaternion.identity);
					currentHead.rigidbody.AddForce(powerOfPower);
					var hs : HeadScript = currentHead.GetComponent("HeadScript");
					hs.cannon = this;
					
				}
			
		}
	//Input.GetAxis("Horizontal"); //1 for right, -1 for left
	if(!stop)
	{
		rigidbody.AddTorque(rigidbody.transform.forward * dir * aimSpeed);
	//rigidbody.angularVelocity
	//print(rigidbody.transform.up);
	
		var cur = Mathf.Atan2(rigidbody.transform.up.y,rigidbody.transform.up.x) * 57.2957795;
	
		if(cur < minAngle && dir == -1 || cur > maxAngle && dir == 1)
			dir = -dir;
		
			
		if(Input.GetButtonDown("Jump"))
		{
			stop = true;
			powerbar.SetActive(true);
			dir = 1;
			
			
		}		
	}
	
	
	
	
}


function Reset()
{
	Destroy(currentHead.gameObject);
	stop = powerSet = powerbar.active = false;
	currentHead = this.gameObject;
	roomBarrier.Reset();
	//cameraController.target = transform;
	//cameraController.Reset();
	//
	//cameraController.transform.position.y = 0.9060373;
	
}