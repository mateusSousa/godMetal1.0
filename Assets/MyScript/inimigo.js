#pragma strict

var distanciaPlayer : Vector3;

var velocTranslate : float;

function Start () {

}

function Update () {
	
	//
	velocTranslate = 20 * Time.deltaTime;

	distanciaPlayer = Movimentos.posicaoPlayer - transform.position;
	//print(distanciaPlayer);
	
	//movimentaçao do inimigo
	if (distanciaPlayer.x > 0){
	
		transform.Translate(velocTranslate, 0, 0);
	}
	else{
	
		transform.Translate(-velocTranslate, 0, 0);
	}
	
	if (distanciaPlayer.z > 0){
	
		transform.Translate(0,0, velocTranslate);
	}
	else{
	
		transform.Translate(0, 0, -velocTranslate);
	}

}

function OnCollisionEnter(collision : Collision){

		if(collision.gameObject.tag == "Tiro1"){
		
			Destroy(gameObject);
		}
}