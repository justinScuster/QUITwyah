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
	Debug.Log("HIOT");
	print("hit");
	if(other.CompareTag("Player"))
	{
		other.rigidbody.AddForce(Vector3(1,1,0).normalized * 500);
	}
}
