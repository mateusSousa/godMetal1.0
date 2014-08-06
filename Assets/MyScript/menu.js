#pragma strict

var posX:float;
var posY:float;

var altura:float;
var largura:float;

function Start () {

	altura = 50;
	largura = 100;

}

function Update () {

}

function OnGUI()
{
	posX = Screen.width/2 - largura/2;
	posY = Screen.height/2 - altura/2 ;
	if (GUI.Button(Rect(posX - 200, posY , largura, altura), "New Game"))
	{
		Application.LoadLevel("newGame");
	}
	
	if (GUI.Button(Rect(posX - 200, posY + 100 , largura, altura), "Informaçoes"))
	{
		Application.LoadLevel("informacoes");
		
	}
	
	if (GUI.Button(Rect(posX - 200, posY + 200 , largura, altura), "Creditos"))
	{
		Application.LoadLevel("creditos");
	}
	
}