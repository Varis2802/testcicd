import { ApiProperty } from "@nestjs/swagger";

export class LoginMobileConfirmResponseDto {
    @ApiProperty({default: 'shivam1415@sbx'})
    phrAddress: string

    @ApiProperty({default: 'Bearer eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1QHNieCIsImNsaWVudElkIjoiU0JYXzAwMjI1NCIsInN5c3RlbSI6IkFCSEEtQSIsInJlcXVlc3RlcklkIjoiUEhSLVdFQiIsInBock1vYmlsZSI6IjkzNzc2MTIxMzYiLCJleHAiOjE2NzM5OTUzNDEsImlhdCI6MTY3Mzk4ODE0MSwicGhyQWRkcmVzcyI6InNoaXZhbTE0MTVAc2J4IiwidHhuSWQiOiIyMWJmODAzZS1hYTNiLTRkYmYtYjFjOC0xNjIwMjg3YzE5OTYifQ.4cxrS68oaambArRws2Z_v0sdEQNSH6iB6n4qJx7Op529y_659gwTb4I9HJ8GEg1O-BXExE7P75PZs1WbexoWTPFj-VVO33_fZJJxIffk-MHuM5AJvGtzVi_q2pW7J1MEWaII8faFu0-F1W2axCAFc3lAsqebWTCufnbsyVHd78kTYvdPDmTXzn8IgL5r8xPV5k42tqKBvPu1V96qjZA5O9OeXUat-LtbIqX3wBiKSaRBiyFy7NbGe1JgN3XdzqtIwesMS7B7r-e708ZOnCNoBFIMbxifT3TRcwS2KNurcHo0RSxUSsdGur_3sFq6uX0EahriUoTSTRhW-sau-3cwvw'})
    token: string

    @ApiProperty({default: '7200'})
    expiresIn: string

    @ApiProperty({default: 'Bearer eyJhbGciOiJSUzUxMiJ9.eyJzdWIiOiJzaGl2YW0xNDE1QHNieCIsImNsaWVudElkIjoiU0JYXzAwMjI1NCIsInN5c3RlbSI6IkFCSEEtQSIsInR5cCI6IlJlZnJlc2giLCJleHAiOjE2NzUyODQxNDEsImlhdCI6MTY3Mzk4ODE0MX0.g5Znl8UR60l1tJSBvNJGH1aFEHkOfYt9NTD6ZFlFAut1UOgl1sQMObGaegrEOiXJeMW9w2Cnmk8lKbIGGe3xIh4l4YVzCaXZf-0um5UlTksinM9aTWeyQe2rsMoXJyaWAu2ho2v1pLQjkbGRx4OtHQ7NB1EMMJaDjBEVBSw3IcqLlY6oGmUOJkE1Gp-2q0E24wAakBSx7ximSiOLtDYOBzHWdWX2LvRlL0o7hn9FO--jln3FAlZAueXE7oekdyJaPulDl5IvrKyV3ZPnX_SlYuCvYzrVedkxvN8CW8rkomn0brxk6qONyY_YXGNbzYXXPB3U31YWQYOxy9811bG5jw'})
    refreshToken: string

    @ApiProperty({default: '1296000'})
    refreshExpiresIn: string
}