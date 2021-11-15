let questions = [{
  numb: 1,
  question: "Which of the following queries cannot be expressed using the basic relational algebra operations (U, -, x, π, σ, p)?",
  answer: "The sum of all employees’ salaries",
  options: [
      "Department address of every employee",
      "Employees whose name is the same as their department name",
      "The sum of all employees’ salaries",
      "All employees of a given department"
  ]
},
{
  numb: 2,
  question: "In SQL, relations can contain null values, and comparisons with null values are treated as unknown. Suppose all comparisons with a null value are treated as false. Which of the following pairs is not equivalent?",
  answer: "x < 5, not(x = 5)",
  options: [
      "x = 5, not (not (x = 5)",
      "x = 5, x > 4 and x < 6, where x is an integer",
      "x < 5, not(x = 5)",
      "None of the above"
  ]
},
{
  numb: 3,
  question: `Given relations r(w, x) and s(y, z), the result of
select distinct w, x
from r, s
is guaranteed to be same as r, provided`,
  answer: "r has no duplicates and s is non-empty",
  options: [
      "r has no duplicates and s is non-empty",
      "r and s have no duplicates",
      "s has no duplicates and r is non-empty",
      "r and s have the same number of tuples"
  ]
},
{
  numb: 4,
  question: "The database can be configured to do ordered indexing on Ap or hashing on Ap. Which of the following statements is TRUE?",
  answer: " Hashing will outperform ordered indexing on Q1, but not on Q2 ",
  options: [
      " Ordered indexing will always outperform hashing for both queries",
      " Hashing will always outperform ordered indexing for both queries",
      " Hashing will outperform ordered indexing on Q2, but not on Q1.",
      " Hashing will outperform ordered indexing on Q1, but not on Q2 "
  ]
},
{
  numb: 5,
  question: `Database table by name Loan_Records is given below. 

Borrower    Bank_Manager   Loan_Amount
Ramesh      Sunderajan     10000.00
Suresh      Ramgopal       5000.00
Mahesh      Sunderajan     7000.00
What is the output of the following SQL query? 

SELECT Count(*) 
FROM  ( (SELECT Borrower, Bank_Manager 
     FROM   Loan_Records) AS S 
      NATURAL JOIN (SELECT Bank_Manager, 
                           Loan_Amount 
                    FROM   Loan_Records) AS T ); `,
  answer: 5,
  options: [
      3,
      9,
      5,
      6
  ]
},
];