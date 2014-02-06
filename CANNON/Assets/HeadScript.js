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

function Start () {

}

function Update ()
{
	if(rigidbody.velocity.magnitude <= 0.2f && isFocused && !firstRun)
	{
		//var s : CannonControl = cannon.GetComponent("CannonControl");
		
		isFocused = false;
		cannon.Reset();
		bugMeter = 0;
		print(bugMeter);
		meterDisplayed = false; 
		
	}
	
	bugMeter += Time.deltaTime;
	
	
	
	
	firstRun = false;
	if(bugMeter > 5)
	{
		if(meterDisplayed == false)
		{
			print(bugMeter);
			meterDisplayed = true;
		}
		
		if(isFocused)
		{
			
			if(Input.GetKeyUp("w"))
			{	
				rigidbody.velocity *= 0.1;
				rigidbody.AddForce(PowerForce*Vector2(0,1));
				bugMeter = 0;
			}
					
			if(Input.GetKeyUp("s"))
			{
				rigidbody.velocity *= 0.1;
				rigidbody.AddForce(PowerForce*Vector2(0,-1));
				bugMeter = 0;
			}
						
			if(Input.GetKeyUp("a"))
			{
				rigidbody.velocity *= 0.1;
				rigidbody.AddForce(PowerForce*Vector2(-1,0));
				bugMeter = 0;
			}
					
			if(Input.GetKeyUp("d"))
			{
				rigidbody.velocity *= 0.1;
				rigidbody.AddForce(PowerForce*Vector2(1,0));
				bugMeter = 0;
			}
		}
	}
}


