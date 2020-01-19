package com.tester;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.app.Party;

public class Testing {

	public static void main(String[] args) {

		ArrayList<Party> parties = new ArrayList<Party>();

		boolean exitStatus = false;

		try (Scanner sc = new Scanner(System.in)) {
			while (!exitStatus) {

				System.out.println("1. Enter the Party Names\n2.Exit");
				switch (sc.nextInt()) {
				case 1:
					parties.add(new Party(sc.next()));
					break;
				case 2:
					exitStatus = true;
				}
			}

			System.out.println("For voting");

			exitStatus = false;

			int i = 1;
			for (Party p : parties) {
				System.out.println(i + " " + p.getName());
				i = i + 1;
			}

			while (!exitStatus) {
				System.out.println("1.Enter the index of Party for voting\n2.Exit");
				switch (sc.nextInt()) {
				case 1:
					int index = sc.nextInt();
					Party p = parties.get(index - 1);
					p.setVotes(p.getVotes() + 1);
					break;
				case 2:
					exitStatus = true;
				}

			}

			System.out.println("For Winner");

		}
	}
}
