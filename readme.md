# DAY 1 
SIMPLE NO. PROBLEMS

## about no. series how we can solve a problem with constant time complexity (genral thought process) , way to buid it 
given no.śereis sai kesa ek formula get kr skta hai in terms of n so we can calcute the result within the contant time complexity
[alt text](/images/image2.png)


Formula derive karne ke liye kaun-kaun si techniques seekhni hain?
Ye sabse important section hai. Tumhara focus sirf formulas collect karna nahi, balki khud formulas derive karna hona chahiye.

![alt text](/images/image1.png)

Tum jab bhi koi mathematical problem solve karo, toh directly formula search mat karna.

Khud se ye questions poochna:
1. Given numbers ka pattern kya hai?
2. Kya numbers ko pair ya group kar sakte hain?
3. Kya koi common factor nikal sakte hain?
4. Total terms kitni hain?
5. Kya kisi known series ka formula apply ho sakta hai?
6. Kya formula ko n ki general form mein likh sakte hain?
7. Kya even aur odd cases mein alag handling chahiye?
8. Kya isse loop ki jagah O(1) mein solve kar sakte hain?
Meri advice: Har problem ke liye ek notebook maintain karo jisme 4 cheezein likho: Given → Pattern → Derivation → General Formula.

## about big init 


## way to know about the perfect square and Rs method (during home assigement)
1. about perfect square logic
- way 1
 for (let j = 1; j <= i; j++) {
        if (j * j === i) {
          console.log(i);
          break;
        }
      }

- way 2 (Newton's Method (Newton-Raphson Method))
![alt text](/images/image.png)

Newton's Method ek numerical technique hai, jiska use kisi number ya equation ka approximate root find karne ke liye kiya jata hai.

1. Initially ek guess (x) assume karte hain ki square root kya ho sakta hai.
2. Formula apply karke guess ko improve karte hain.
3. Har iteration mein guess actual square root ke closer hota jata hai.
4. Ye process accurate result milne tak repeat hota hai.
5. Perfect Square check karne ke liye square root ka square original number se compare karte hain.

`Important`: Newton's Method mein bhi iterations ke liye loop chahiye. Isliye tumhari original condition ke liye agar strictly ek hi loop allowed hai, toh Newton's Method directly suitable nahi hai.
`Remember`: Newton's Method mein hum repeatedly apne initial guess ko improve karte hain, taaki actual answer ke closer pahunch sakein.

# DAY 2
## learning 1
conditonal block mai return key word must hai ider asa nai h jesa ki arrow fun m without {} this h single line m return krdeta h kind of this ok

## learning 2
Internally aise evaluate hoti hai:
let value = 102
(65 <= value) >= 90, 
now see
65 <= 102
// true
true >= 90
// 1 >= 90
// false
Condition false
Yahi tumhari problem hai!

JavaScript mein comparison ka result Boolean hota hai (true / false), aur numeric comparison mein true ki value 1 aur false ki 0 hoti hai.
JavaScript mein mathematical chained comparisons directly supported nahi hain. Range check karne ke liye && use karna hai. 

## learning 3
about the leap year
Leap year check karne ke liye 3 rules hain:
1. Agar year 400 se completely divisible hai, toh leap year hai.
2. Agar year 100 se completely divisible hai, toh leap year nahi hai (unless 400 se bhi divisible ho).
3. Agar year 4 se completely divisible hai, toh leap year hai (provided woh 100 se divisible na ho).


![alt text](<images/Leap Year Rules Infographic.png>)

hm log hmsa bath kerta leap leap year but actual reailty is different hai mtlb 
ider ek twist hai 
year have 2 category 
1- leap year -> asa year jisma mai feb ka 1 day extra hota hai so overall 366 days hota h fr
2- centurey year -> Har 100 saal ki century ka last year Century Year kehlata hai.

हर Century Year, Leap Year नहीं होता।
हर Leap Year, Century Year नहीं होता।
कुछ years दोनों होते हैं, जैसे 2000.
कुछ years दोनों में से कोई नहीं होते, जैसे 2025.

**how we can check it then**
Step 1: Kya year 100 se divisible hai?
- No → Normal year (non-century year).
- Yes → Century Year.
Step 2: Ab Leap Year check karo:
- Agar Century Year hai → 400 se divisible hona chahiye.
- Agar Century Year nahi hai → 4 se divisible hona chahiye.

**Ab ek question socho:**
Agar hum sirf n % 4 === 0 check karte hain, toh 1900 ko bhi Leap Year maan lenge.
Lekin calendar rules ke according 1900 Leap Year nahi hai.
Isliye additional conditions ki zarurat padti hai.
Ek line mein: हर 4 से divisible year Leap Year नहीं होता, क्योंकि 100 से divisible Century Years के लिए 400 वाला exception है।

**Leap Year Calculation & Gregorian Calendar Adjustment**
**Why Does the Gregorian Calendar Follow the 4, 100 & 400-Year Leap Year Rule?**
Century Year mein Leap Day skip karna approximately accumulated difference ko compensate karta hai.
Lekin Gregorian Calendar ne 128-year interval select nahi kiya. Usne 400-year cycle select kiya, jisme 97 Leap Years hote hain.
