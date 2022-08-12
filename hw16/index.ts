import { customChecker } from "./custom-checker";

 //positive checks
 customChecker(2, 2, '+', 4);
 customChecker(6, 3, '-', 3);
 customChecker(10, 5, '/', 2);
 customChecker(-10, 0, '-', -10);
 customChecker(-2, 9, '+', 7);
 customChecker(1, 1, '*', 1);
 customChecker(-80, 10, '/', -8);


 //negative checks
 customChecker(1, 2, '+', 4);
 customChecker(67, 90, '-', 9320);
 customChecker(5454, 6546, '*', 5);
 customChecker(89, 98, '/', 76);
 customChecker(123, 321, '-', 456);
 customChecker(9, 9, '+', 23);
 customChecker(5940, 645, '-', 349085);