//URL--https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

//INSTRUCTIONS--
//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

//SOLUTION--
//i am going to be given a url it can be http:// https:// or www. ends in .<something...>
//i will return a string with just the domain name
//im going to replace http || https || www. with nothing
//then return the results of that sliced to the '.'

function domainName(url) {
  const domain = url
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "");
  return domain.slice(0, domain.indexOf("."));
}

//TESTCASES--
console.log(domainName("http://google.com"));
console.log(domainName("https://youtube.com"));
console.log(domainName("www.xakep.ru"));
