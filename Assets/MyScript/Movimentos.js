#pragma strict

//atributos para controle de movimentaçao do player
var velocidadeMov : float;
var velocidadeRot : float;

//Controle de energia do personagem
var vidaPlayer : int;

//texto em tela da energia do personagem
var textoVida : GUIText;

//atributo que indica posiçao do player
static var posicaoPlayer : Vector3;


function Start () {

	// Definimos aqui valores iniciais para os atributos declarados fora da funçao
	
	velocidadeMov=80.0f;
	velocidadeRot=80.0f;

	vidaPlayer = 100;

}

function Update () {

		textoVida.text = "Vida: " + vidaPlayer + "%";

		if(Input.GetKey(KeyCode.W)) {

			transform.Translate(0,0,velocidadeMov * Time.deltaTime);
			animation.CrossFade("andando");
		}else{
			animation.CrossFade("Parado");
		}

		if(Input.GetKey(KeyCode.S)) {
			
			transform.Translate(0,0,-velocidadeMov * Time.deltaTime);
			animation.CrossFade("andando");
		}

		if(Input.GetKey(KeyCode.A)) {
			
			transform.Rotate(0,-velocidadeRot * Time.deltaTime,0);
			animation.CrossFade("andando");
		}

		if(Input.GetKey(KeyCode.D)) {
			
			transform.Rotate(0,velocidadeRot * Time.deltaTime,0);
			animation.CrossFade("andando");
		}

		if(Input.GetKey(KeyCode.I)) {

			//transform.Rotate(0,velocidadeRot * Time.deltaTime,0);
			//animation.CrossFade("atirando");
		}
		
		if(Input.GetButtonDown("Fire1")){

			animation.Play("atirando");
		}

		//posiçao do player
		posicaoPlayer = transform.position;

}

function OnCollisionEnter(collision : Collision){

		if(collision.gameObject.tag == "Inimigo"){
		
			vidaPlayer -= 10;
		}
}