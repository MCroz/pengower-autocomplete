'use babel';

import autocompleteProvider from './autocomplete-provider';

export default {
    getProvider() {
        // return a single provider, or an array of providers to use together
        return [autocompleteProvider];
    }
};
