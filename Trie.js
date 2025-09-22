/**
 * Seminar 2.5 Simple Trie
 */


class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        // TODO Insert word symbol by symbol
        this.insertRecursively(word, this.root)
    }

    insertRecursively(word, current) {
        if (word.length == 0) return current.isWord = true

        current.children[word[0]] ??= new TrieNode(word[0])
        this.insertRecursively(word.substring(1), current.children[word[0]])
    }

    hasNode(word){
        // TODO Check is word in Trie
        return false;
    }

    getAllNodes(){
        // TODO returns all nodes as array
        return [];
    }
}

module.exports = { Trie };
