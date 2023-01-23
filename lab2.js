const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

// today is 2023-09-28
getAge('1994-06-14') // 23
getAge('1994-06-13') // 24



//const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num};

  function Count(str)
      {
        var upper = 0,
          lower = 0,
          number = 0,
          special = 0;
        for (var i = 0; i < str.length; i++)
        {
          if (str[i] >= "A" && str[i] <= "Z") upper++;
          else if (str[i] >= "a" && str[i] <= "z") lower++;
          else if (str[i] >= "0" && str[i] <= "9") number++;
          else special++;
        }
        document.write("Upper case letters: " + upper + "<br>");
        document.write("Lower case letters : " + lower + "<br>");
        document.write("Number : " + number + "<br>");
        document.write("Special characters : " + special + "<br>");
      }