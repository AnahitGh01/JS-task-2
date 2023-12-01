function Count(str) 
      {
        var lower = 0,
            number = 0,
            special = 0;
        
        for (var i = 0; i < str.length; i++)
        {
          
          if (str[i] >= "a" && str[i] <= "z") lower++;
          else if (str[i] >= "0" && str[i] <= "9") number++;
          else special++;
          
        }
        
        console.log("Lower case letters : " + lower);
        console.log("Number : " + number);
        console.log("Special characters : " + special);
      }
 
      // Driver function
      var str = "@Hello World 2023!";
      Count(str);