<div>
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);

- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The correct answer is B. Here we have not declared greetign.</i>

</p>
</details>

###### 2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
return a + b;
}

sum(1, "2");

- A: NaN
- B: TypeError
- C: "12"
- D: 3

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The correct answer will be C that means the output of this code will be 12. Here a and b has been added but the function has two values.In JavaScript, when you use the + operator with one or both operands being strings. One of the value is string and the another is integer. That's why here string concatenation will be happened. 1+"2" = "12". The output will be string also. </i>

</p>
</details>

###### 3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

- A:['🍕', '🍫', '🥑', '🍔']`
- B:['🍝', '🍫', '🥑', '🍔']`
- C['🍝', '🍕', '🍫', '🥑', '🍔']]`
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The correct answer will be A. The array will be the same as it is. Because the info.favoriteFood data which is on index 0 can be changed but the main array will not be changed. It will remain the same.</i>

</p>
</details>

###### 4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
return `Hi there, ${name}`;
}

console.log(sayHi());

- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The correct answer will be B. That means the output will be Hi there, undefined. Because there is a parameter in the function but it has not been used. For this it will be undefined. </i>

</p>
</details>

###### 5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
if (num) count += 1;
});

console.log(count);

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>The correct answer will be C. That means the output will be 3. Here the condition is if the condition is true, the count will add 1 for the each true statement. The array contains [0,1,2,3]. Here, 0 is falsy value. That's why for the time of 0, it will not add 1 to the count. For other three numbers it will add 1 for each time. That's why the answer will be 3.</i>

</p>
</details>
