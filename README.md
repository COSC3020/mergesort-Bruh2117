[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12496159&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The worst case scenario would be if the array was reversely sorted (ie. the greatest element in front with the following descending). In this case, the outer loop increases the subarray sizes by multiples of two, menaing it takes $log_{2}(n)$ time. The inner loop visits every element of the array, meaning that it will take $n$ time. Also within the inner loop we call the merge function that shifts every element in this array, taking another $n$ time. Thus, the worst-case time complexity of this mergesort is $O(n^2log(n))$. 
