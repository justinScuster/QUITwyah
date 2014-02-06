#pragma strict

var Floor:GameObject;
var currentHead:GameObject;
var cannonFodder:CannonControl;
var HumanNPC:GameObject;

function Start () {

}

function Update ()
{
	if(cannonFodder.currentHead.transform.position.x > transform.position.x)
	{
		transform.position.x += Floor.transform.lossyScale.x;
		Instantiate(Floor,Vector3(transform.position.x,0,0),Quaternion.identity);
		
		
		for(var i = 0; i < Random.Range(1,40); i++)
		{
				Instantiate(HumanNPC,Vector3(transform.position.x+Random.Range(0,Floor.transform.lossyScale.x)-Floor.transform.lossyScale.x/2,
					HumanNPC.transform.lossyScale.y*1.5,0),Quaternion.identity);
				var z:Zombie = HumanNPC.GetComponent("Zombie");
				z.targetHead = cannonFodder.currentHead;
		}
		
		
		
		
		
		
		
		
	}
}

/*
function OnTriggerEnter(headBall : Collider)
{
		if(headBall.gameObject.GetComponent("HeadScript") != null)
		{
			var p = Vector3.zero;
			transform.position.x += 40;
			p.x = transform.position.x;
			p.y = -1;
			Instantiate(Floor,p, Quaternion.identity);
			print("asdl;kkf");
			
		
		
		
		}
}	*/