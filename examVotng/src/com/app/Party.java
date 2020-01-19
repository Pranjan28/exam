package com.app;

public class Party {
	private String name;
	private int votes;
	
	public Party() {
		super();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getVotes() {
		return votes;
	}

	public void setVotes(int votes) {
		this.votes = votes;
	}

	public Party(String name) {
		super();
		this.name = name;
		this.votes = 0;
	}
	
	
}
