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
	if (GUI.Button(Rect(posX , posY + 230 , largura, altura), "Voltar"))
	{
		Application.LoadLevel("telaJogo");
	}
}