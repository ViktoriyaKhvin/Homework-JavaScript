import { customChecker } from "./custom-checker";

 //positive checks
 customChecker(2, 2, '+', 4);
 customChecker(6, 3, '-', 3);
 customChecker(10, 5, '/', 2);
 customChecker(5, 5, '*', 25);
 customChecker(100, 99, '-', 1);
 customChecker(1, 1, '*', 1);
 customChecker(90, 10, '/', 9);


 //negative checks
 customChecker(1, 2, '+', 4);
 customChecker(67, 90, '-', 9320);
 customChecker(5454, 6546, '*', 5);
 customChecker(89, 98, '/', 76);
 customChecker(123, 321, '-', 456);
 customChecker(9, 9, '+', 23);
 customChecker(5940, 645, '-', 349085);