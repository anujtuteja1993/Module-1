function validateform()
        {
          var name = Document.getElementById(name).value;
          var email = Document.getElementById(email).value;

          if (name==null||name=="")
          {
            alert("Name can't be blank");
            return false;
          }
        }