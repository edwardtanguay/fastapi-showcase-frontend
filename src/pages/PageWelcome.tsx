import { useEffect, useState } from "react";
import { Book } from "../types";

export const PageWelcome = () => {
	const [books, setBooks] = useState<Book[]>([]);

	useEffect(() => {
		(async () => {
			const response = await fetch("http://localhost:3344/book");
			const _books: Book[] = await response.json();
			setBooks(_books);
		})();
	}, []);

	return (
		<>
			{books.length > 0 ? (
				<>
					<h2 className="text-2xl mb-3">{books.length} Books</h2>

					{books.map((book) => {
						return (
							<div key={book.id}>
								<p>
									{book.title} (
									{book.completed
										? "completed"
										: "still reading"}
									)
								</p>
							</div>
						);
					})}
				</>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
};
