#pragma strict

var cannon : CannonControl; 

var HeadBase : GameObject; 

var bugMeter:float = 0;

var PowerForce = 500;



//////////////////////////////////////////////////////////
//	To do:												//
//		Make it to where head doesn't fly super high and// 
// 			forces itself back down once it hits a    	//
//			certain height								//	
//														//
//														//
//////////////////////////////////////////////////////////


/*var slide_Beginning : Vector3;
var slide_Middle : Vector3;
var slide_End : Vector3;
*/

private var isFocused : boolean = true;
private var firstRun : boolean = true;
private var meterDisplayed : boolean = false;
private var stuckToGround : float = 0;
public var horizontalDrag : float = 0;
public var verticalDrag : float = 0;
public var bounceCount : float = 0;
public var timeSinceBounce : float = 0;

private var floorThingy:GameObject;




function Start () 
{
	floorThingy = Instantiate(HeadBase,Vector3(transform.position.x,0,0),Quaternion.identity);
}

function Update ()
{
	//Debug.Log(rigidbody.velocity.magnitude);
	/*if(isFocused && !firstRun)
	{
		//var s : CannonControl = cannon.GetComponent("CannonControl");
		
		isFocused = false;
		cannon.Reset();
		bugMeter = 0;
		print(bugMeter);
		meterDisplayed = false; 
		
	}*/
	
	floorThingy.transform.position.x = this.transform.position.x;
	bugMeter += Time.deltaTime;
	rigidbody.drag = .25;
	
	//if(rigidbody.transform.position.y <= 0.97)
	//	rigidbody.transform.position.y = 0.98;
	
	//if(rigidbody.transform.position.y > 100)
	//	rigidbody.AddForce(Vector3(0,-rigidbody.velocity.y,0).normalized);
		
	firstRun = false;
	if(bugMeter > 5)
	{
		if(meterDisplayed == false)
			meterDisplayed = true;
		
		if(isFocused)
		{
			
			/*if(Input.GetKeyUp("w"))
			{	
				rigidbody.velocity *= 0.1;
				rigidbody.AddForce(PowerForce*Vector2(0,.25));
				bugMeter = 0;
			}*/
					
			if(Input.GetKeyUp("s"))
			{
				var GetDown = rigidbody.velocity * 0.1;
				rigidbody.AddForce(PowerForce*Vector2(0,-.15));
				bugMeter = 0;
			}
						
			if(Input.GetKeyUp("a"))
			{
				//rigidbody.velocity *= 0.1;
				//rigidbody.AddForce(PowerForce*Vector2(rigidbody.velocity.x,0));
				rigidbody.drag *= 1.00001;
				bugMeter = 0;
			}
					
			if(Input.GetKeyUp("d"))
			{
				var GO = rigidbody.velocity * .005;
				//rigidbody.AddRelativeForce(PowerForce*Vector3.right*GO.x);
				//rigidbody.AddRelativeForce(PowerForce*Vector3.right*rigidbody.velocity.x*.15);
				//if(GO.x <= .5)
				//	GO.x *= 2;
				rigidbody.AddForce(PowerForce*Vector2(GO.x*1.75,0));
				bugMeter = 0;
			}
			
		}
	}
	
	/*if(rigidbody.transform.position.y <= .98)
	{
		stuckToGround += Time.deltaTime;
		print(stuckToGround);
	}
	else 
		stuckToGround = 0;
		
	

	if(stuckToGround >= .7)
		rigidbody.AddForce(Vector3(0,15,0).normalized * 500);	
	*/
	
	//if(stuckToGround == true)
	//	rigidbody.AddForce(Vector3(0,5,0).normalized * 500);
	
	//HeadBase.rigidbody.transform.position.x = rigidbody.transform.position.x;
}


function OnCollisionEnter(other:Collision)
{
	
	if(other.gameObject.CompareTag("Head Base"))
	{
		timeSinceBounce = 0;	
	}
	
	
	/*if(other.gameObject.CompareTag("Zombie"))
	{
		rigidbody.AddForce(Vector3(0,20,0).normalized*500);
	}*/
}


function OnCollisionStay(other:Collision)
{
	/*
	//rigidbody.velocity -= rigidbody.velocity * 1.2 * Time.deltaTime;
	timeSinceBounce += Time.deltaTime;
	if(rigidbody.velocity.x <= .3 && timeSinceBounce >= 1.5)
		cannon.Reset();
	/*else if(timeSinceBounce >= .3)
		rigidbody.AddForce(Vector3(0,15,0).normalized * 500);*/
		
	//if(other.gameObject.CompareTag("Zombie") && stuckToGround == true)
		//rigidbody.AddForce(Vector3(0,20,0).normalized*500);*/
		
}

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.CompareTag("Zombie"))
	{
		var z:Zombie = other.gameObject.GetComponent("Zombie");
		
		rigidbody.velocity.y = Mathf.Abs(rigidbody.velocity.y);
		
		rigidbody.velocity *= .9;
		print(rigidbody.velocity.magnitude);
		if(rigidbody.velocity.magnitude < 10)
		{
			print("blah");	
			rigidbody.velocity = rigidbody.velocity.normalized * 50;
		}
		if(transform.position.y > z.GetHeadY())
		{
			if(rigidbody.velocity.x < rigidbody.velocity.y)
			{
				var tempVel = rigidbody.velocity.x;
				rigidbody.velocity.x = rigidbody.velocity.y;
				rigidbody.velocity.y = tempVel;
			}
		}
		
		else if(transform.position.y < z.GetFootY())
		{
			if(rigidbody.velocity.x > rigidbody.velocity.y)
			{
				var tempVel2 = rigidbody.velocity.x;
				rigidbody.velocity.x = rigidbody.velocity.y;
				rigidbody.velocity.y = tempVel2;
				print("DO");
			}
		}
		
		else if(z.transform.forward.x < 0)
		{
			rigidbody.velocity.y *= -1;
		}
		
		else 
		{

		}
		
	}
	
	if(other.gameObject.CompareTag("Head Base"))
	{
		rigidbody.velocity.y = Mathf.Abs(rigidbody.velocity.y);
	}
}


function FixedUpdate()
{
	//HeadBase.rigidbody.transform.position.x = transform.position.x;
}


