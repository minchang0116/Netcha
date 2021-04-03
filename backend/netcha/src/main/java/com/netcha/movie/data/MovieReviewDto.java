package com.netcha.movie.data;

import java.util.Date;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class MovieReviewDto {
	private long no;
	private long movieId;
	private long userId;
	private String userNickname;
	private String content;
	private Date regtime;
	private int totalLike;
	
	public MovieReviewDto(MovieReview movieReview) {
		this.no = movieReview.getNo();
		this.movieId = movieReview.getMovie().getNo();
		this.userId = movieReview.getMember().getSeq();
		this.userNickname = movieReview.getMember().getNickname();
		this.content = movieReview.getContent();
		this.regtime = movieReview.getRegtime();
		this.totalLike = movieReview.getMovieReviewLike().size();
	}
}