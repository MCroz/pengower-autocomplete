'use babel';

// data source is an array of objects
import suggestions from '../data/autocomplete-list';

class AutocompleteProvider {
	constructor() {
		// offer suggestions only when editing plain text or HTML files
		this.selector = '*';
	}

	getSuggestions(options) {
		const { prefix } = options;
		return this.findMatchingSuggestions(prefix);
	}

	findMatchingSuggestions(prefix) {
		// filter list of suggestions to those matching the prefix, case insensitive
		let prefixLower = prefix.toLowerCase();
		let matchingWords = suggestions.filter((suggestion) => {
			let textLower = suggestion.toLowerCase();
			return textLower.startsWith(prefixLower);
		});

		// run each matching suggestion through inflateSuggestion() and return
		//return matchingSuggestions.map(this.inflateSuggestion);
		let matchingSuggestions = matchingWords.map((word) => {
			return { text: word };
		});

		return matchingSuggestions;
	}

	// clones a suggestion object to a new object with some shared additions
	// cloning also fixes an issue where selecting a suggestion won't insert it
}
export default new AutocompleteProvider();
