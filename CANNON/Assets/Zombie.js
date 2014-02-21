#pragma strict

private var zombieSpeed = 100;
public var targetHead : GameObject;

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
	if(Vector3.Distance(transform.position,targetHead.transform.position) > 100)
		Destroy(this.gameObject);
}

function OnTriggerEnter(other:Collider)
{
	if(other.CompareTag("Player"))
	{
		if(targetHead != null)
		{
			
			var vs : HeadScript = targetHead.GetComponent("HeadScript");
			//if(vs.rigidbody.velocity.y < .5)
				//vs.rigidbody.velocity.y *= 2000;
			var outputSpeed = vs.rigidbody.velocity.x * 7;
			if(outputSpeed <= 0)
				outputSpeed *= -1;
			if(outputSpeed <= .5)
				outputSpeed *= 20;
			var outputSpeed2 = vs.rigidbody.velocity.y * 5;
			if(outputSpeed2 <= 0)
				outputSpeed2 *= -1;
			if(outputSpeed2 <= .2)
				outputSpeed *= 30;
			
			//other.rigidbody.AddRelativeForce(Vector2(outputSpeed,outputSpeed2));
			other.rigidbody.AddForce(Vector3(outputSpeed,outputSpeed2,0).normalized * 1000);
			
			
			Destroy(this.gameObject);
		}
	}
	
}
