
// ---: Array Methods : reduce Method :---

let nums = [1, 2, 3, 4];

let finalVal = nums.reduce((res, el) => {
    console.log(res);
    return (res + el);
});

console.log("Sum of all elements of Array :",finalVal);

