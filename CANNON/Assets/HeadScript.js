#pragma strict

var cannon : CannonControl; 

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

function Start () {

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
	
	
	bugMeter += Time.deltaTime;
	rigidbody.drag = .25;
	
	if(rigidbody.transform.position.y <= 0.97)
		rigidbody.transform.position.y = 0.98;
	
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
				var GO = rigidbody.velocity * 0.015;
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
}


function OnCollisionEnter(other:Collision)
{
	
	if(other.gameObject.CompareTag("Floor"))
	{
		rigidbody.velocity.y *= .75;
		rigidbody.velocity.x *= .9;
		timeSinceBounce = 0;	
	}
	
	/*if(other.gameObject.CompareTag("Zombie"))
	{
		rigidbody.AddForce(Vector3(0,20,0).normalized*500);
	}*/
}


function OnCollisionStay(other:Collision)
{
	
	//rigidbody.velocity -= rigidbody.velocity * 1.2 * Time.deltaTime;
	timeSinceBounce += Time.deltaTime;
	if(rigidbody.velocity.x <= .2 && timeSinceBounce >= 1.5)
		cannon.Reset();
	else if(timeSinceBounce >= .3)
		rigidbody.AddForce(Vector3(0,15,0).normalized * 500);
		
	//if(other.gameObject.CompareTag("Zombie") && stuckToGround == true)
		//rigidbody.AddForce(Vector3(0,20,0).normalized*500);
		
}


