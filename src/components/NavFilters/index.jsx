import './NavFilters.css';

export default function createNavFilters() {
	return (
		<div className="top3">
			<button type="button" className="btn btn-sm fBold menuTop">
				Relevant
			</button>
			<button type="button" className="btn btn-sm fGray menuTop">
				Latest
			</button>
			<button type="button" className="btn btn-sm fGray menuTop">
				Top
			</button>
		</div>
	);
}
