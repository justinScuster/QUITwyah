#pragma strict

var Floor:GameObject;
var currentHead:GameObject;
var cannonFodder:CannonControl;
var HumanNPC:GameObject;
var leftSide:float;
var rightSide:float;
var spawnStart:float;
var distanceBetweenHumans:float;
var minDistanceBetweenHumans:float;

private var startLocation : Vector3;

function Start () {

	startLocation = transform.position;
}

function Reset()
{
	transform.position = startLocation;
}

function Update ()
{

	leftSide = transform.position.x - 20;
	rightSide = transform.position.x + 20;
	distanceBetweenHumans = Random.Range(1,4);
	minDistanceBetweenHumans = 1;
	
	if(currentHead != null)
	{
		if(cannonFodder.currentHead.transform.position.x > transform.position.x)
			{
				transform.position.x += Floor.transform.lossyScale.x;
				Instantiate(Floor,Vector3(transform.position.x,0,0),Quaternion.identity);
				var fls : FloorDelete = Floor.GetComponent("FloorDelete");
				fls.zhead = cannonFodder.currentHead;
				
				
				for(spawnStart = leftSide; spawnStart < rightSide; spawnStart += 1 + minDistanceBetweenHumans + distanceBetweenHumans)
				{
						//Instantiate(HumanNPC,Vector3(transform.position.x+Random.Range(0,Floor.transform.lossyScale.x)-Floor.transform.lossyScale.x/2,
						//	HumanNPC.transform.lossyScale.y*1.5,0),Quaternion.identity);
						Instantiate(HumanNPC,Vector3(spawnStart,HumanNPC.transform.lossyScale.y*1.5,0),Quaternion.identity);
						var z:Zombie = HumanNPC.GetComponent("Zombie");
						z.targetHead = cannonFodder.currentHead;
				}
				
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