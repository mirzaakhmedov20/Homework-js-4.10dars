// 1.Satrni kiritish sifatida qabul qiladigan va shu satrning teskari versiyasini qaytaradigan funksiya yozing.
// Misol uchun, agar kirish "salom" bo'lsa, chiqish "malos" bo'lishi kerak.
// function teskari(v) {
//   return v.split("").reverse(); //
// }
// console.log(teskari("salom"));

// // 2. Satrni kiritish sifatida qabul qiluvchi va qatordagi unlilar sonini (a, e, i, o, u)
// //qaytaruvchi funksiya yozing.  Katta harflarga e'tibor bermang va katta va kichik unlilarni ko'rib chiqing.
// function countUnli(v) {
//   return v.match(/[aeiou]/gi).length;
// }
// console.log(countUnli("Mirzaakhmedov")); //5
// console.log(countUnli("Shukurullo")); //4

// function unli(soz) {
//   let unliHarflar = "aeiouAEIOU"; // Unli harflar
//   let unliCounter = 0;
//   for (let i = 0; i < soz.length; i++) {
//     if (unliHarflar.indexOf(soz[i]) !== -1) {
//       unliCounter++;
//     }
//   }
//   return unliCounter;
// }
// let soz = "Mirzaakhmedov";
// let unliCounter = unli(soz);
// console.log(" " + soz);
// console.log(" " + unliCounter);

// 3. Berilgan satr palindrom yoki yo'qligini tekshiradigan funktsiyani yozing. Palindrom bu oldinga qarab orqaga qarab
// o'qiladigan so'z, ibora yoki belgilar ketma-ketligi. Masalan, "radar" palindrom.

// function isPalindrome(str) {
//   const reversedStr = str.split("").reverse().join("");
//   return str === reversedStr;
// }
// console.log(isPalindrome("mom"));
// console.log(isPalindrome("radar"));
// console.log(isPalindrome("alla"));
//
//   console.log(isPalindrome("olma"));

// 4. Gapni (satrni) kiritish sifatida qabul qiladigan va shu gapdagi eng uzun so'zni  qaytaradigan funksiya yozing.
//Agar maksimal uzunligi bir xil bo'lgan bir nechta so'z bo'lsa, birinchisini qaytaring.
// Tinish belgilariga e'tibor bermang va so'zni bo'sh joy bo'lmagan belgilar ketma-ketligi deb hisoblang.

// 5. Gapni (satrni) kiritish sifatida qabul qiladigan va har bir so'zning birinchi harfi bosh harf bilan yangi gapni qaytaradigan funktsiyani yozing.
// Misol uchun, agar kirish "salom dunyo" bo'lsa, chiqish "Salom dunyo" bo'lishi kerak.
// function birinchiHarf(arr) {
//   const sozlar = arr.split(" ");
//   for (let i = 0; i < sozlar.length; i++) {
//     sozlar[i] = sozlar[i].charAt(0).toUpperCase() + sozlar[i].substring(1);
//   }
//   return sozlar.join(" ");
// }
// console.log(birinchiHarf("assalomu alaykum")); // "Salom Dunyo","Assalomu alaykum"

// 6. Takrorlangan belgilar sonidan foydalanib, asosiy satr siqishni bajaradigan  funksiyani yozing. Masalan, "aabcccccaaa" qatori "a2b1c5a3" ga aylanadi.
