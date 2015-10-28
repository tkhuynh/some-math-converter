function dec_to_bi(num) {
  var count = 0;
  do {
    if (Math.pow(2,count) < num) {
      count++;
      continue;
    } else break;
  } while (true);
  if (Math.pow(2,count) == num) return Math.pow(10,count);
  else {
    var result = [];
    do {
      if (num >= Math.pow(2,count-1)) {
        result.push(1);
        num = num - Math.pow(2,count-1);
        count--;
      } else {
        result.push(0);
        count--;
      }
    } while (count > 0);
    return result.join("");
  }
}

function bi_to_dec(num) {
  num = num.toString().split("").reverse();
  var dec = 0;
  for (var i = 0; i < num.length; i++) {
    dec += num[i] * Math.pow(2, i);
  }
  return dec;
}

function prime_check (num) {
  var zero_one =[0, 1];
  if (zero_one.indexOf(num) > -1) {
    return num + " is not a Prime number.";
  }
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return num + " is not a Prime number."
  }
  return num + " is a Prime number."
}

function Fibonacci_check (num) {
  var sequence = [0,1];
  var i = 2;
  while (sequence[i-1] < num) {
    sequence.push(sequence[i-2] + sequence[i-1]);
    i++;
  }
  var print_sequence;
  if (sequence.length <= 4) {
    print_sequence = sequence.join(" ") + "...";
  } else {
    print_sequence =  "..." + sequence.slice(-4).join(" ") + "...";
  }
  if (sequence.indexOf(num) < 0) return num + " is not in Fibonacci sequence " + print_sequence;
  return num + " is in Fibonacci sequence " + print_sequence;
}
var main = function() {
  $('#decimal_converter').hide();
  $('#binary_converter').hide();
  $('#prime_checker').hide();
  $('#fibonacci_checker').hide();
  function _reset() {
    $('#value').val('');
    $('.alert').hide();
    $('#print_result').remove();
  }

  //dec converter
  $('#menu1').click(function() {
    $('#decimal_converter').show();
    $('#binary_converter').hide();
    $('#prime_checker').hide();
    $('#fibonacci_checker').hide()
    _reset();
  });
  $('#decimal_converter #converter').click(function() {
    $('#decimal_converter #print_result').remove();
    var value = $('#decimal_converter #value').val();
    if (!isNaN(value) && value != '' && /\./g.test(value) == false) {
      var result = dec_to_bi(Number(value));
      $('<p id="print_result">').text(result).appendTo('#decimal_converter #box');
    } else {
      $('.alert').show();
    }
  });
  $('#decimal_converter #clear').click(function() {
    $('#decimal_converter #value').val('');
    _reset();
  });

  //bi converter
  $('#menu2').click(function() {
    $('#decimal_converter').hide();
    $('#binary_converter').show();
    $('#prime_checker').hide();
    $('#fibonacci_checker').hide()
    _reset();
  });
  $('#binary_converter #converter').click(function() {
    $('#binary_converter #print_result').remove();
    var value = $('#binary_converter #value').val();
    if (value != '' && /[a-z2-9.]/gi.test(value) == false) {
      var result = bi_to_dec(Number(value));
      $('<p id="print_result">').text(result).appendTo('#binary_converter #box');
    } else {
      $('.alert').show();
    }
  });
  $('#binary_converter #clear').click(function() {
    $('#binary_converter #value').val('');
    _reset();
  });

  //prime checker
  $('#menu3').click(function() {
    $('#decimal_converter').hide();
    $('#binary_converter').hide();
    $('#prime_checker').show();
    $('#fibonacci_checker').hide()
    _reset();
  });
  $('#prime_checker #check').click(function() {
    $('#prime_checker #print_result').remove();
    var value = $('#prime_checker #value').val();
    if (value != '' && /[a-z.]/gi.test(value) == false) {
      var result = prime_check(Number(value));
      $('<p id="print_result">').text(result).appendTo('#prime_checker #box');
    } else {
      $('.alert').show();
    }
  });
  $('#prime_checker #clear').click(function() {
    $('#prime_checker #value').val('');
    _reset();
  });

  //fibonacci checker
  $('#menu4').click(function() {
    $('#decimal_converter').hide();
    $('#binary_converter').hide();
    $('#prime_checker').hide();
    $('#fibonacci_checker').show()
    _reset();
  });
  $('#fibonacci_checker #check').click(function() {
    $('#fibonacci_checker #print_result').remove();
    var value = $('#fibonacci_checker #value').val();
    if (value != '' && /[a-z.]/gi.test(value) == false) {
      var result = Fibonacci_check(Number(value));
      $('<p id="print_result">').text(result).appendTo('#fibonacci_checker #box');
    } else {
      $('.alert').show();
    }
  });
  $('#fibonacci_checker #clear').click(function() {
    $('#fibonacci_checker #value').val('');
    _reset();
  });
}
$(document).ready(main);