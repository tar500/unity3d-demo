#pragma strict


//Сила, придаваемая пуле
public var bulletImpulse = 300;

//Скорость стрельбы
public var shootSpeed : float = 0.05; 

//Объект пули, который мы будем клонировать
public var bullet : GameObject; 

//Время последнего выстрела
public var lastShotTime : float; 
 
 
 
 //Метод, вызывающийся при создании объекта, к которому приклеплен данный скрипт
 function Start() {
  	lastShotTime = 0; 
 }
 
 
 
 //Метод, вызывающийся каждый фрейм
 function Update () { 
 
 	//Нажатие левой кнопки мыши
 	if (Input.GetKey(KeyCode.Mouse0))  {
 	
 	 	//Ограничение частоты стрельбы 
		if (Time.time>(lastShotTime + shootSpeed)) {
		 
			var bull_clone : GameObject;
			
			//Создаем новый объект
	 		bull_clone = Instantiate(bullet, transform.position, transform.rotation);
	 		
	 		//Созданная пуля не будет взаимодействовать с объектом, к которому прикреплен скрипт 
	 		Physics.IgnoreCollision(bull_clone.collider, collider);
	 		
	 		//Придадим пуле силу, направленную вперед
	 		bull_clone.rigidbody.AddForce(Camera.current.transform.forward*bulletImpulse, ForceMode.Impulse); 
	 		
	 		//запомним время последнего выстрела
	  		lastShotTime = Time.time;
	  	}
 	}
 }