#pragma strict

var velocidadeBala: float;

function Start () {

}

function Update () {

velocidadeBala = 380 * Time.deltaTime;
transform.Translate(0,0,velocidadeBala);

}


/* neste trecho de codigo e necessario listar todas as tags em que a bala
vai desaparecer caso entre em colisao*/

function OnCollisionEnter(collision: Collision){

	if(collision.gameObject.tag == "ObjArena" || collision.gameObject.tag == "Inimigo"){
	
		Destroy(gameObject);
	}

}