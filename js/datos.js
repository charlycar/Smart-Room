/*Esta función guardará el nombre en datos locales*/
function PonerNombre()  
		    {
		    /*Si el nombre existe que se muestre*/
			if (localStorage.getItem("fname") != null) {
			/*Llamamos al DOM, buscamos el elemento llamado "user_name" y guardamos en él lo archivado en datos locales*/
			    document.getElementById("user_name").innerHTML = "¡HOLA " + localStorage.getItem("fname").toUpperCase() + "!";
			    }
			    else{
			    document.getElementById("user_name").innerHTML = "¡Hola!";	
			    }
		    }
function PonerDatos()
		    /*De la misma manera que en la función previa*/
		    {
			if ((localStorage.getItem("fcountry") != "") && (localStorage.getItem("fcountry") != null)) {
				document.getElementById("user_country").innerHTML = "País: " + localStorage.getItem("fcountry");
				}
			else{
				document.getElementById("user_country").innerHTML = "País: -";
			}
			if ((localStorage.getItem("fcity") != "") && (localStorage.getItem("fcity") != null)) {
				document.getElementById("user_city").innerHTML = "Ciudad: " + localStorage.getItem("fcity");
				}
			else{
				document.getElementById("user_city").innerHTML = "Ciudad: -";
			}				
			if ((localStorage.getItem("fgps") != "") && (localStorage.getItem("fgps") != null)) {
				document.getElementById("user_gps").innerHTML = "Localización: " + localStorage.getItem("fgps");
				}
			else{
				document.getElementById("user_gps").innerHTML = "Localización: -";
			}	
			/*En este caso no guardamos lo que queremos mostrar sino la fuente del enlace*/							
			document.getElementById("gmapa").href = "http://" + localStorage.getItem("fmaps");						
		    }

function GuardarDatos()  
			/*Guardamos desde el formulario de configuración los elementos SÓLO si la contraseña es válida*/
			{
			var paises = ["Albania",
						"Alemania",
						"Andorra",
						"Armenia",
						"Austria",
						"Azerbaiyán",
						"Bélgica",
						"Bielorrusia",
						"Bosnia-Herzegovina",
						"Bulgaria",
						"Chipre",
						"Ciudad del Vaticano",
						"Croacia",
						"Dinamarca",
						"Eslovaquia",
						"Eslovenia",
						"España",
						"Estonia",
						"Finlandia",
						"Francia",
						"Georgia",
						"Grecia",
						"Hungría",
						"Irlanda",
						"Islandia",
						"Italia",
						"Kazajistán",
						"Letonia",
						"Liechtenstein",
						"Lituania",
						"Luxemburgo",
						"Malta",
						"Moldavia",
						"Mónaco",
						"Montenegro",
						"Noruega",
						"Países Bajos",
						"Polonia",
						"Portugal",
						"Reino Unido",
						"República Checa",
						"República de Macedonia",
						"Rumanía",
						"Rusia",
						"San Marino",
						"Serbia",
						"Suecia",
						"Suiza",
						"Turquía",
						"Ucrania"];
						
			if (document.getElementById("pass").value == localStorage["fpass_pedida"])
			{
				/*Sacamos un alert verificando el envío*/
				for(i=0; i<49; i++)
				{
				if(document.getElementById("country").value == paises[i])
				{
					var pais_correcto = "1";
				}
				}
				if(pais_correcto == "1")
				{
					
					if(("26" <= document.getElementById("temp_max").value) && (document.getElementById("temp_max").value <= "28"))
					{	
						if(("26" <= document.getElementById("temp_min").value) && (document.getElementById("temp_min").value<= "28"))
						{
							localStorage.setItem("fcountry", document.getElementById("country").value);
							alert("Envío correcto");
							window.location = "index.html";
							localStorage.setItem("fcity", document.getElementById("city").value);
							localStorage.setItem("fgps", document.getElementById("gps").value);
							localStorage.setItem("fmaps", document.getElementById("maps").value);
							localStorage.setItem("fpass", document.getElementById("pass").value);
							localStorage.setItem("fsensores", document.getElementById("sensores").value);
							localStorage.setItem("ffile1", document.getElementById("file1").value);
							localStorage.setItem("fdif_temp", document.getElementById("dif_temp").value);
						}
						else
						{
							alert("Temperatura mínima erronea");
							document.getElementById("temp_min").style.color = "red";	
							document.getElementById("temp_min").focus();	
						}
					}
					else
					{
						alert("Temperatura máxima erronea");	
						document.getElementById("temp_max").style.color = "red";
						document.getElementById("temp_max").focus();
					}
						
					
				}
				else{
					alert("País erroneo");	
					document.getElementById("country").style.color = "red";
					document.getElementById("country").focus();
				}
				
			}
			else{
			/*Alerta con contraseña incorrecta*/
				alert("¡Contraseña incorrecta!");
				document.getElementById("pass").focus();
				}
			}
			
function GuardarNombre()  
			{
			expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if ( !expr.test(document.getElementById("email").value) )
				alert("Error: La dirección de correo " + document.getElementById("email").value + " es incorrecta.");
			else if(document.getElementById("pass_pedida").value.length > 4)
			{
				var notification = new NotificationFx({
							 
				    // element to which the notification will be appended
				    // defaults to the document.body
				    wrapper : document.body,
				 
				    // the message
				    message : "<h1>Bienvenido " + localStorage["fname"] + "</h1>",
				 
				    // layout type: growl|attached|bar|other
				    layout : 'bar',
				 
				    // effects for the specified layout:
				    // for growl layout: scale|slide|genie|jelly
				    // for attached layout: flip|bouncyflip
				    // for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
				    // ...
				    effect : 'slide',
				 
				    // notice, warning, error, success
				    // will add class ns-type-warning, ns-type-error or ns-type-success
				    type : 'error',
				 
				    // if the user doesn´t close the notification then we remove it 
				    // after the following time
				    ttl : 6000,
				 
				    // callbacks
				    onClose : function() { return false; },
				    onOpen : function() { return false; }
					});

				// show the notification
				notification.show();
				


				setTimeout("window.location = 'inicio.html'", 3000);
				localStorage.setItem("fname", document.getElementById("name").value);
				localStorage.setItem("fpass_pedida", document.getElementById("pass_pedida").value);
				localStorage.setItem("femail", document.getElementById("email").value);
			}
			else
				alert("Error: La contraseña es poco segura");
			}
			


function GuardarNombre2()  
			{
			var notification = new NotificationFx({
							 
				    // element to which the notification will be appended
				    // defaults to the document.body
				    wrapper : document.body,
				 
				    // the message
				    message : "<h1>Bienvenido " + localStorage["fname"] + "</h1>",
				 
				    // layout type: growl|attached|bar|other
				    layout : 'bar',
				 
				    // effects for the specified layout:
				    // for growl layout: scale|slide|genie|jelly
				    // for attached layout: flip|bouncyflip
				    // for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
				    // ...
				    effect : 'slide',
				 
				    // notice, warning, error, success
				    // will add class ns-type-warning, ns-type-error or ns-type-success
				    type : 'error',
				 
				    // if the user doesn´t close the notification then we remove it 
				    // after the following time
				    ttl : 6000,
				 
				    // callbacks
				    onClose : function() { return false; },
				    onOpen : function() { return false; }
					});

				// show the notification
				notification.show();
				
				localStorage.setItem("fname", document.getElementById("name").value);
				localStorage.setItem("fpass_pedida", document.getElementById("pass_pedida").value);
				localStorage.setItem("femail", document.getElementById("email").value);
				setTimeout("window.location = 'inicio.html'", 3000);
			}


function Login()
			{
				if(document.getElementById("email_login").value == localStorage["femail"])
				{
					if (document.getElementById("pass_login").value == localStorage["fpass_pedida"]) 
						{
							var notification = new NotificationFx({
							 
							    // element to which the notification will be appended
							    // defaults to the document.body
							    wrapper : document.body,
							 
							    // the message
							    message : "<h1>Bienvenido " + localStorage["fname"] + "</h1>",
							 
							    // layout type: growl|attached|bar|other
							    layout : 'bar',
							 
							    // effects for the specified layout:
							    // for growl layout: scale|slide|genie|jelly
							    // for attached layout: flip|bouncyflip
							    // for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
							    // ...
							    effect : 'slide',
							 
							    // notice, warning, error, success
							    // will add class ns-type-warning, ns-type-error or ns-type-success
							    type : 'error',
							 
							    // if the user doesn´t close the notification then we remove it 
							    // after the following time
							    ttl : 6000,
							 
							    // callbacks
							    onClose : function() { return false; },
							    onOpen : function() { return false; }
 							});
 
							// show the notification
							notification.show();
							


							setTimeout("window.location = 'inicio.html'", 3000);
						}
					else
						{
							document.getElementById("pass_pedida").style.color = "red";	
							document.getElementById("pass_pedida").focus();
							// create the notification
							var notification = new NotificationFx({
							 
							    // element to which the notification will be appended
							    // defaults to the document.body
							    wrapper : document.body,
							 
							    // the message
							    message : '<h1>Usuario o contraseña erróneos</h1>',
							 
							    // layout type: growl|attached|bar|other
							    layout : 'bar',
							 
							    // effects for the specified layout:
							    // for growl layout: scale|slide|genie|jelly
							    // for attached layout: flip|bouncyflip
							    // for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
							    // ...
							    effect : 'slide',
							 
							    // notice, warning, error, success
							    // will add class ns-type-warning, ns-type-error or ns-type-success
							    type : 'error',
							 
							    // if the user doesn´t close the notification then we remove it 
							    // after the following time
							    ttl : 6000,
							 
							    // callbacks
							    onClose : function() { return false; },
							    onOpen : function() { return false; }
 							});
 
							// show the notification
							$(".ns-box").css({"background": "#FD5252"});
							notification.show();
						}
				}
				else
				{	
						document.getElementById("email_login").style.color = "red";	
						document.getElementById("email_login").focus();
						// create the notification
						var notification = new NotificationFx({
						 
						    // element to which the notification will be appended
						    // defaults to the document.body
						    wrapper : document.body,
						 
						    // the message
						    message : '<h1>Usuario o contraseña erróneos</h1>',
						 
						    // layout type: growl|attached|bar|other
						    layout : 'bar',
						 
						    // effects for the specified layout:
						    // for growl layout: scale|slide|genie|jelly
						    // for attached layout: flip|bouncyflip
						    // for other layout: boxspinner|cornerexpand|loadingcircle|thumbslider
						    // ...
						    effect : 'slide',
						 
						    // notice, warning, error, success
						    // will add class ns-type-warning, ns-type-error or ns-type-success
						    type : 'error',
						 
						    // if the user doesn´t close the notification then we remove it 
						    // after the following time
						    ttl : 6000,
						 
						    // callbacks
						    onClose : function() { return false; },
						    onOpen : function() { return false; }
 						});
 
						// show the notification
						$(".ns-box").css({"background": "#FD5252"});
						notification.show();
				}
				

				
			}

function Validaciones (){
	$(document).ready(function() {
    $('#registrationForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: 'El nombre no es válido',
                validators: {
                    notEmpty: {
                        message: 'No has introducido un nombre'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'El nombre sólo puede contener letras'
                    },
                    different: {
                        field: 'password',
                        message: 'El nombre y la contraseña no pueden coincidir'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'No has introducido un email'
                    },
                    emailAddress: {
                        message: 'El email no es válido'
                    }
                }
            },
            pass_pedida: {
                validators: {
                    notEmpty: {
                        message: 'No has introducido una contraseña'
                    },
                    different: {
                        field: 'username',
                        message: 'El nombre y la contraseña no pueden coincidir'
                    },
                    stringLength: {
                        min: 8,
                        message: 'La contraseña debe tener al menos 8 caracteres'
                    }
                }
            }
        }
    });
});
}

function Hovers(){
	$(document).ready(function(){
  		$("#temp").hover(function(){
    		$("#temp").attr('src',"img/gota_1.png");
    	},function(){
    			$("#temp").attr('src',"img/boton_temp.png");
  			});
});
}
