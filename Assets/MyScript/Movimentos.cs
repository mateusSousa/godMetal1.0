using UnityEngine;
using System.Collections;

public class Movimentos : MonoBehaviour {

	//public float gravidade = 1;
	//public float maxVelX = 1;
	//public float maxVelY = 1;
	//public float aceleracao = 0.5f;

	//private CharacterController controlador;
	private float velocidadeMov;
	private float velocidadeRot;

	private int vidaPlayer;

	public GUIText textoVida;

	public static Vector3 posicaoPlayer;

	// Use this for initialization
	void Start () {

		velocidadeMov=80.0f;
		velocidadeRot=80.0f;

		vidaPlayer = 100;

	}
	
	// Update is called once per frame
	void Update () {
	
		textoVida.text = "Vida: " + vidaPlayer;

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

	void OnCollisionEnter (Collision collision){
		
		if(collision.gameObject.tag == "Inimigo"){
			
			vidaPlayer -= 10;
		}
		
	}


}



