#pragma strict

var projetil: GameObject;
//var forca : int;

function Start () {

}

function Update () {
	
	if(Input.GetButtonDown ("Fire1"))
	{
		
		Instantiate (projetil, transform.position, transform.rotation);
	
		//animation.CrossFade("atirando");
		
	}
	

}

