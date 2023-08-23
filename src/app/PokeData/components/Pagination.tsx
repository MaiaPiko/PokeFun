import React from "react";

export default function Pagination({ pageTotal, pageNumber }: PaginationProps) {
	const pages = Array.from({ length: pageTotal }, (_, index) => index + 1);
	const currentPage = parseInt(pageNumber);
	const previousPage = currentPage - 1;
	const nextPage = currentPage + 1;

	return (
		<section>
			<nav
				aria-label="Page navigation"
				className="flex flex-col items-center justify-center inset-x-0 bottom-0 h-16"
			>
				<ul className="inline-flex -space-x-px text-sm">
					<li>

						<a
							href={currentPage > 1 ? previousPage.toString() : "#"}
							className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight bg-white border ${
                                currentPage <= 1 ? "bg-gray-200 text-gray-400 pointer-events-none" : "border-gray-300"
                              } rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                            >
						
                        
							Previous
						</a>
					</li>
					{pages.map((page) => (
						<li key={page}>
							<a
								href={`${page}`}
								aria-current="page"
								className={`flex items-center justify-center px-3 h-8  border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 text-black ${currentPage == page ? "bg-pokeRed  pointer-events-none text-black" : "dark:text-gray-400 border-gray-300"
                                  } hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white`}
							>
								{page}
							</a>
						</li>
					))}

					<li>
						<a
							href={currentPage<pageTotal? nextPage.toString():"#"}
							className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border ${currentPage>= pageTotal ? "bg-gray-200 text-gray-400 pointer-events-none" : "border-gray-300"} "border-gray-300"} border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
						>
							Next
						</a>
					</li>
				</ul>
			</nav>
		</section>
	);
}
