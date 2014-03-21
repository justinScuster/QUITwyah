#pragma strict

private var zombieSpeed = 100;
public var targetHead : GameObject;
private var hitDisplay : boolean = false;

function Start () 
{
	//zombieSpeed = Random.Range(100,500);
}

function Awake()
{
	zombieSpeed = Random.Range(1,10);
	//transform.position.z += Random.Range(-.2,.2);
}

function Update () 
{
	//zombieSpeed *= Time.deltaTime;
	//rigidbody.AddForce(zombieSpeed * transform.right);
	transform.position.x += zombieSpeed * Time.deltaTime;
	if(targetHead != null)
	if(Mathf.Abs(transform.position.x-targetHead.transform.position.x) > 100)
		Destroy(this.gameObject);
}

function OnTriggerEnter(other:Collider)
{
	if(other.CompareTag("Player"))
	{
		if(targetHead != null)
		{
			if(hitDisplay == false)
			{	
				print("HIT");
				hitDisplay = true;
			}
			
			var vs : HeadScript = targetHead.GetComponent("HeadScript");
			if(vs.transform.position.y - this.transform.position.y <= 0)
			{	
				if(vs.rigidbody.velocity.y <= .1)
					vs.rigidbody.velocity.y *= 80;
				other.rigidbody.AddForce(Vector3(vs.rigidbody.velocity.x*2, vs.rigidbody.velocity.y*10,0).normalized * 500);
			}
			//if(vs.rigidbody.velocity.y < .5)
				//vs.rigidbody.velocity.y *= 2000;
			//var outputSpeed = vs.rigidbody.velocity.x * 7;
			else
			{
				var outputSpeed = vs.rigidbody.velocity;
				//print(outputSpeed);
				if(outputSpeed.x <= 0)
					outputSpeed.x *= -1;
				if(outputSpeed.x <= .5)
					outputSpeed.x *= 2;
				//var outputSpeed2 = vs.rigidbody.velocity.y * 5;
				/*if(outputSpeed.y <= 0)
					outputSpeed.y *= -1;
				if(outputSpeed.y <= .2)
					outputSpeed.y *= 2;*/
				
				//other.rigidbody.AddRelativeForce(Vector2(outputSpeed,outputSpeed2));
				other.rigidbody.AddForce(Vector3(outputSpeed.x,outputSpeed.y,0).normalized * 500);
			}
			
			hitDisplay = false;
			
			Destroy(this.gameObject);
		}
	}
	
}
