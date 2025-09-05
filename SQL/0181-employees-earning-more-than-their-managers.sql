# Write your MySQL query statement below
SELECT E.name AS Employee
FROM Employee AS E
JOIN Employee AS EM
ON E.managerId = EM.id 
WHERE E.salary > EM.salary;