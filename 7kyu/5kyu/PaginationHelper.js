// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); // should == 2
// helper.itemCount(); // should == 6
// helper.pageItemCount(0); // should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); // should == 1 (zero based index)
// helper.pageIndex(2); // should == 0
// helper.pageIndex(20); // should == -1
// helper.pageIndex(-10); // should == -1

// My Solution Is:

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    // Returns the number of pages
    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    // Returns the total number of items in the collection
    itemCount() {
        return this.collection.length;
    }

    // Returns the number of items on the specified page
    pageItemCount(pageIndex) {
        const totalPages = this.pageCount();

        if (pageIndex < 0 || pageIndex >= totalPages) {
            return -1; // Invalid page index
        }

        if (pageIndex === totalPages - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        }

        return this.itemsPerPage;
    }

    // Returns the page that the item index belongs to
    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.collection.length) {
            return -1; // Invalid item index
        }

        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

// Example usage:
const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.pageCount()); // Output: 2
console.log(helper.itemCount()); // Output: 6
console.log(helper.pageItemCount(0)); // Output: 4
console.log(helper.pageItemCount(1)); // Output: 2
console.log(helper.pageItemCount(2)); // Output: -1
console.log(helper.pageIndex(5)); // Output: 1
console.log(helper.pageIndex(2)); // Output: 0
console.log(helper.pageIndex(20)); // Output: -1
console.log(helper.pageIndex(-10)); // Output: -1

