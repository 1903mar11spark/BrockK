package com.kathryn.fizzbuzz1;

public class FizzBuzz {

	public FizzBuzz() {
	//Implement each of the FizzBuzz methods --	
		//Basic FizzBuzz: FizzBuzz1 Method

		
		//For loop with i iterator to chack values
		//Use % to see if they're divisible by 3, 5, ot both
		//Print out / *3 = fizz / *5 = buzz / *3*5 = fizzbuzz /

	}
	
	public void fizzBuzz1() {
		int[] intArray = new int[100];
		for (int i=0; i<100; i++) {
			intArray[i] = i+1; //Assign values to array indexes
		}
		for (int element: intArray) {
			//This is to test the array, delete afterwards:
			// System.out.print(element + ", ");
			if (element%5==0 && element%3 == 0) {
				System.out.print("fizzbuzz, ");
			}else {
				if (element%5==0) {
					System.out.print("buzz, ");
				}
				else { if (element%3==0) {
					System.out.print("fizz, ");
				}
				else {
					System.out.print(element + ", ");
				}
				
					
				}
			
			}
		
			}

		}
	public void fizzBuzz2(int m, int n) {
		if (m>n) {
			System.out.println("Error: the variable 'm' must be less than or equal to the variable 'n'.");
		} else {
		int[] arr2 = new int[n+1];
		
		for (int i=m; i<=n; i++) {
			arr2[i] = i;
			//TEST
			// System.out.print(i+", ");
			if (i%5==0 && i%3 == 0) {
				System.out.print("fizzbuzz, ");
			}else {
				if (i%5==0) {
					System.out.print("buzz, ");
				}
				else { if (i%3==0) {
					System.out.print("fizz, ");
				}
				else {
					System.out.print(i + ", ");
				}
				}
			}
		}
		
		
		}

	}
	public void fizzBuzz3(int m, int n, int fizzNum, int buzzNum) {
		int[] arr3 = new int[n+1];
		
	}
}


			

	