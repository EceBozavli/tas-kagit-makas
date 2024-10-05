// prompt('Birini seç: \n Taş/Kağıt/Makas');

let oyuncuHamlesi = prompt('taş kağıt makas');

let bilgisayarHamlesi = ["taş", "kağıt","makas"].at(Math.floor(Math.random() * 3));

if(oyuncuHamlesi===bilgisayarHamlesi) {

  alert('Berabere kaldınız');

} 
else if (oyuncuHamlesi=="taş" && bilgisayarHamlesi=="kağıt" ) {

  alert('oyuncu hamlesi=taş, bilgisayar hamlesi=kağıt. Kaybettiniz, bilgisayar kazandı');

}
else if (oyuncuHamlesi=="taş" && bilgisayarHamlesi=="makas") {

  alert('oyuncu hamlesi=taş, bilgisayar hamlesi=makas.Tebrikler, kazandınız');

}
else if (oyuncuHamlesi=="kağıt" && bilgisayarHamlesi=="taş") {

  alert('oyuncu hamlesi=kağıt, bilgisayar hamlesi=taş.Tebrikler, kazandınız');

}
else if (oyuncuHamlesi=="kağıt" && bilgisayarHamlesi=="makas") {

  alert('oyuncu hamlesi=kağıt, bilgisayar hamlesi=makas.Kaybettiniz, bilgisayar kazandı');
  
}
else if (oyuncuHamlesi=="makas" && bilgisayarHamlesi=="taş") {

  alert('oyuncu hamlesi=makas, bilgisayar hamlesi=taş.Kaybettiniz, bilgisayar kazandı');
  
}
else if (oyuncuHamlesi=="makas" && bilgisayarHamlesi=="kağıt") {

  alert('oyuncu hamlesi=makas, bilgisayar hamlesi=kağıt. Tebrikler, kazandınız');

}
else {

  alert('hatalı giriş yaptınız!');

}


// else if (oyuncuHamlesi=="makas" && bilgisayarHamlesi=="kağıt") {

//   console.log('Tebrikler, kazandınız');
  
// }


//  else if((oyuncuHamlesi==="taş" && bilgisayarHamlesi==="kağıt" ) || (oyuncuHamlesi==="kağıt" && bilgisayarHamlesi==="taş")) {

//   console.log('Kaybettiniz');

//  }
//  else if((oyuncuHamlesi==="taş" && bilgisayarHamlesi==="makas") || (oyuncuHamlesi==="makas" && bilgisayarHamlesi==="taş")) {

//   console.log('Tebrikler, kazandınız');

//  }

//  else if((oyuncuHamlesi==="kağıt" && bilgisayarHamlesi==="makas") || (oyuncuHamlesi==="makas" && bilgisayarHamlesi==="kağıt" )) {

//    console.log('Kaybettiniz');

//  }