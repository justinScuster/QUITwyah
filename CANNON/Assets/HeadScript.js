#pragma strict

var cannon : CannonControl; 

var bugMeter:float = 0;

var PowerForce = 500;


/*var slide_Beginning : Vector3;
var slide_Middle : Vector3;
var slide_End : Vector3;
*/

private var isFocused : boolean = true;
private var firstRun : boolean = true;
private var meterDisplayed : boolean = false;
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
	
}


function OnCollisionEnter(other:Collision)
{
	
	if(other.gameObject.CompareTag("Floor"))
	{
		rigidbody.velocity.y *= .75;
		rigidbody.velocity.x *= .9;
		timeSinceBounce = 0;
	}
}


function OnCollisionStay(other:Collision)
{
	//rigidbody.velocity -= rigidbody.velocity * 1.2 * Time.deltaTime;
	timeSinceBounce += Time.deltaTime;
	if(timeSinceBounce >= 1.5)
		cannon.Reset();
}


