$("#formulario-login").validate({

    rules:{
      nombre:{
        required:true,
        solo_letras:true,
        maxlength: 30
      },
      contrasenya: {
        required: true,
      }
    },
    messages:{
      nombre:{
        required:"Este campo es obligatorio",
        maxlength:"Por favor no introducir más de 30 caracteres"
      },
      contrasenya:{
        required:"Este campo es obligatorio",
      }
    },
  
    submitHandler: function(form) {
      form.submit();
      alert("REGISTRO EXITOSO")
    }
   });
  
$("#formulario-registro").validate({

    rules:{
      nombr:{
        required:true,
        solo_letras:true,
        maxlength: 20
      },
      apellido:{
        required:true,
        solo_letras:true,
        maxlength: 20
      },
      email:{
        required:true,
        email:true
      },
      contrasena: {
        required: true,
      }
    },
    messages:{
        nombr:{
            required:" Este campo es obligatorio",
            maxlength: " No más de 20 caracteres",
            },
            apellido:{
                required:" Este campo es obligatorio",
                maxlength: " No más de 20 caracteres",
            },
            email:{
                required:" Este campo es obligatorio",
                email:" Ingrese un correo válido"
            },
            contrasena: {
                required:" Este campo es obligatorio",
            }
    },
  
    submitHandler: function(form) {
      form.submit();
      alert("REGISTRO EXITOSO")
    }
   });

$("#registro").validate({

    rules:{
      email:{
        required:true,
        email:true
      }
    },
    messages:{
      email:{
        required:"Este campo es obligatorio",
        email:"Ingrese un correo electronico válido"
      }
    },
  
    submitHandler: function(form) {
      form.submit();
      alert("LISTO! REVISA TU CORREO ELECTRONICO")
    }
   });

$("#contacto").validate({

  rules:{
    name:{
      required:true,
      solo_letras:true,
      maxlength: 1000
    },
    email: {
      required: true,
      email:true
    },
    message:{
      required:true
    }
  },
  messages:{
    name:{
      required:"Este campo es obligatorio",
      maxlength:"Solo se pueden escribir mensajes de 1000 caracteres"
    },
    email: {
      required: "Este campo es obligatorio",
      email:"Ingrese un email válido"
    },
    message:{
      required:"Este campo es obligatorio"
    }
  },

  submitHandler: function(form) {
    form.submit();
    alert("REGISTRO EXITOSO")
  }
});

  jQuery.validator.addMethod("solo_letras", function(value, element) 
  {
    return this.optional(element) || /^[a-z ]+$/i.test(value);
  }, "Solo se pueden ingresar letras o espacios"); 
  
  
  
  
  
  